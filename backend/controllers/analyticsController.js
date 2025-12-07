const Task = require('../models/Task');
const Analytics = require('../models/Analytics');
const aiEngine = require('../utils/aiEngine');

/**
 * Generate AI study plan for user
 */
exports.generateStudyPlan = async (req, res) => {
  try {
    // Fetch user data
    const User = require('../models/User');
    const user = await User.findById(req.user.userId);

    // Fetch pending tasks
    const tasks = await Task.find({
      userId: req.user.userId,
      completed: false
    });

    if (tasks.length === 0) {
      return res.status(200).json({
        message: 'No pending tasks',
        plan: {
          dailySchedule: [],
          prioritizedSubjects: [],
          recommendedBreaks: [],
          focusHours: [],
          insights: [
            {
              type: 'success',
              title: 'All Clear!',
              message: 'You have no pending tasks. Great work!'
            }
          ]
        }
      });
    }

    // Generate plan using AI engine
    const plan = aiEngine.generateStudyPlan({
      availableHoursPerDay: user.dailyGoal || 4,
      level: user.level,
      studySubjects: user.studySubjects
    }, tasks);

    res.status(200).json({
      message: 'Study plan generated successfully',
      plan
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate study plan', error: error.message });
  }
};

/**
 * Get analytics data
 */
exports.getAnalytics = async (req, res) => {
  try {
    const daysBack = req.query.days || 7;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysBack);

    // Get analytics records
    const analyticsData = await Analytics.find({
      userId: req.user.userId,
      date: { $gte: startDate }
    }).sort({ date: -1 });

    // Calculate aggregates
    const totalHoursStudied = analyticsData.reduce((sum, a) => sum + a.hoursStudied, 0);
    const totalTasksCompleted = analyticsData.reduce((sum, a) => sum + a.tasksCompleted, 0);
    const avgFocusScore = analyticsData.length > 0 
      ? Math.round(analyticsData.reduce((sum, a) => sum + a.focusScore, 0) / analyticsData.length)
      : 0;

    // Get subject-wise performance
    const subjectPerformance = {};
    analyticsData.forEach(record => {
      record.subjectPerformance.forEach(subj => {
        if (!subjectPerformance[subj.subject]) {
          subjectPerformance[subj.subject] = {
            subject: subj.subject,
            totalHours: 0,
            tasksCompleted: 0
          };
        }
        subjectPerformance[subj.subject].totalHours += subj.hoursSpent;
        subjectPerformance[subj.subject].tasksCompleted += subj.tasksCompleted;
      });
    });

    // Calculate completion rate
    const Task = require('../models/Task');
    const allTasks = await Task.find({ userId: req.user.userId });
    const completedTasks = allTasks.filter(t => t.completed).length;
    const completionRate = allTasks.length > 0 ? Math.round((completedTasks / allTasks.length) * 100) : 0;

    res.status(200).json({
      message: 'Analytics data retrieved successfully',
      analytics: {
        totalHoursStudied: Math.round(totalHoursStudied * 10) / 10,
        totalTasksCompleted,
        completionRate,
        avgFocusScore,
        subjectPerformance: Object.values(subjectPerformance),
        dailyData: analyticsData,
        period: {
          startDate,
          endDate: new Date(),
          days: daysBack
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch analytics', error: error.message });
  }
};

/**
 * Record study session
 */
exports.recordSession = async (req, res) => {
  try {
    const { hoursStudied, tasksCompleted, tasksPending, subjectPerformance, breaksTaken, focusScore } = req.body;

    const analyticsRecord = new Analytics({
      userId: req.user.userId,
      hoursStudied: hoursStudied || 0,
      tasksCompleted: tasksCompleted || 0,
      tasksPending: tasksPending || 0,
      subjectPerformance: subjectPerformance || [],
      breaksTaken: breaksTaken || 0,
      focusScore: focusScore || 0
    });

    await analyticsRecord.save();

    res.status(201).json({
      message: 'Session recorded successfully',
      record: analyticsRecord
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to record session', error: error.message });
  }
};

/**
 * Get AI insights
 */
exports.getInsights = async (req, res) => {
  try {
    const User = require('../models/User');
    const user = await User.findById(req.user.userId);

    const tasks = await Task.find({
      userId: req.user.userId,
      completed: false
    });

    const insights = aiEngine.generateInsights(user, tasks);

    res.status(200).json({
      message: 'Insights generated successfully',
      insights
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate insights', error: error.message });
  }
};
