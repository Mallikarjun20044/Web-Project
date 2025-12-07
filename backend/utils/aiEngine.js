/**
 * AI Module - Rule-based study plan generator
 * This module provides AI-powered recommendations for study planning
 */

/**
 * Generate a personalized study plan based on user data
 * @param {Object} userData - User's profile and preferences
 * @param {Array} tasks - Pending tasks for the user
 * @returns {Object} - Recommended study plan
 */
function generateStudyPlan(userData, tasks) {
  const plan = {
    dailySchedule: [],
    prioritizedSubjects: [],
    recommendedBreaks: [],
    focusHours: [],
    insights: []
  };

  // Sort tasks by priority and due date
  const sortedTasks = sortTasksByUrgency(tasks);

  // Generate hourly schedule based on available time
  plan.dailySchedule = createDailySchedule(userData, sortedTasks);

  // Identify subjects to prioritize
  plan.prioritizedSubjects = prioritizeSubjects(sortedTasks, userData);

  // Calculate optimal break intervals (Pomodoro-based)
  plan.recommendedBreaks = calculateBreakIntervals(userData.availableHoursPerDay);

  // Identify focus hours (when user is most productive)
  plan.focusHours = identifyFocusHours(userData);

  // Generate AI insights
  plan.insights = generateInsights(userData, sortedTasks);

  return plan;
}

/**
 * Sort tasks by urgency (due date and priority)
 */
function sortTasksByUrgency(tasks) {
  return tasks.sort((a, b) => {
    const priorityWeight = { high: 3, medium: 2, low: 1 };
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    
    // Sort by due date first, then by priority
    if (dateA !== dateB) {
      return dateA - dateB;
    }
    return priorityWeight[b.priority] - priorityWeight[a.priority];
  });
}

/**
 * Create a daily study schedule
 */
function createDailySchedule(userData, tasks) {
  const schedule = [];
  const availableHours = userData.availableHoursPerDay;
  let currentHour = 9; // Start at 9 AM
  let remainingHours = availableHours;

  const topTasks = tasks.slice(0, 5); // Focus on top 5 tasks

  for (let task of topTasks) {
    if (remainingHours <= 0) break;

    const sessionDuration = Math.min(task.estimatedHours || 1, remainingHours);

    schedule.push({
      subject: task.subject,
      task: task.title,
      startTime: `${currentHour}:00`,
      endTime: `${currentHour + sessionDuration}:00`,
      duration: sessionDuration,
      priority: task.priority,
      breakAfter: sessionDuration >= 2 // Suggest break after 2+ hours
    });

    currentHour += sessionDuration + 0.25; // 15 min break between sessions
    remainingHours -= sessionDuration;
  }

  return schedule;
}

/**
 * Prioritize subjects based on pending tasks and deadlines
 */
function prioritizeSubjects(tasks, userData) {
  const subjectMetrics = {};

  for (let task of tasks) {
    if (!task.completed) {
      if (!subjectMetrics[task.subject]) {
        subjectMetrics[task.subject] = {
          subject: task.subject,
          tasksCount: 0,
          totalHours: 0,
          urgencyScore: 0,
          highPriorityTasks: 0
        };
      }

      subjectMetrics[task.subject].tasksCount += 1;
      subjectMetrics[task.subject].totalHours += task.estimatedHours || 1;
      
      if (task.priority === 'high') {
        subjectMetrics[task.subject].highPriorityTasks += 1;
      }

      // Calculate urgency based on days until due date
      const daysUntilDue = Math.ceil((new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24));
      subjectMetrics[task.subject].urgencyScore += Math.max(0, 10 - daysUntilDue);
    }
  }

  // Convert to array and sort by urgency score
  return Object.values(subjectMetrics)
    .sort((a, b) => {
      const scoreB = b.urgencyScore + (b.highPriorityTasks * 2);
      const scoreA = a.urgencyScore + (a.highPriorityTasks * 2);
      return scoreB - scoreA;
    })
    .slice(0, 5) // Top 5 subjects
    .map(item => ({
      subject: item.subject,
      priority: item.highPriorityTasks > 0 ? 'high' : 'medium',
      pendingTasks: item.tasksCount,
      estimatedHours: Math.round(item.totalHours),
      reason: generateSubjectReason(item)
    }));
}

/**
 * Generate break intervals using Pomodoro technique
 */
function calculateBreakIntervals(availableHours) {
  const breaks = [];
  const sessionDuration = 50; // 50 minutes of focused work
  const shortBreak = 10; // 10 minute break
  const longBreak = 30; // 30 minute break after 4 sessions

  const totalMinutes = availableHours * 60;
  let timeElapsed = 0;
  let sessionCount = 0;

  while (timeElapsed < totalMinutes) {
    sessionCount++;
    timeElapsed += sessionDuration;

    if (timeElapsed >= totalMinutes) break;

    const breakDuration = sessionCount % 4 === 0 ? longBreak : shortBreak;
    const breakTime = Math.min(breakDuration, totalMinutes - timeElapsed);

    breaks.push({
      sessionNumber: sessionCount,
      breakDuration: breakTime,
      reason: sessionCount % 4 === 0 ? 'Long break - stretch and relax' : 'Quick refresh break'
    });

    timeElapsed += breakTime;
  }

  return breaks;
}

/**
 * Identify optimal focus hours based on user level
 */
function identifyFocusHours(userData) {
  const focusHours = [];

  // Early morning is generally best for focused work
  focusHours.push({
    time: '9:00 - 12:00',
    description: 'Morning focus hours - Peak mental clarity',
    productivity: 95
  });

  if (userData.availableHoursPerDay >= 4) {
    focusHours.push({
      time: '14:00 - 16:00',
      description: 'Afternoon focus hours - Post-lunch recovery',
      productivity: 80
    });
  }

  if (userData.availableHoursPerDay >= 6) {
    focusHours.push({
      time: '18:00 - 19:30',
      description: 'Evening focus hours - Light review time',
      productivity: 70
    });
  }

  return focusHours;
}

/**
 * Generate AI insights and recommendations
 */
function generateInsights(userData, tasks) {
  const insights = [];

  // Calculate total pending hours
  const totalPendingHours = tasks
    .filter(t => !t.completed)
    .reduce((sum, t) => sum + (t.estimatedHours || 1), 0);

  const daysAvailable = Math.max(1, Math.ceil((new Date(tasks[0]?.dueDate || Date.now()) - new Date()) / (1000 * 60 * 60 * 24)));
  const dailyRequirementHours = Math.ceil(totalPendingHours / daysAvailable);

  if (dailyRequirementHours > userData.availableHoursPerDay) {
    insights.push({
      type: 'warning',
      title: 'Heavy Workload Ahead',
      message: `You have ${totalPendingHours} hours of work with only ${daysAvailable} days. Consider extending deadlines or breaking tasks into smaller parts.`
    });
  }

  if (tasks.filter(t => t.priority === 'high' && !t.completed).length > 3) {
    insights.push({
      type: 'warning',
      title: 'Multiple High-Priority Tasks',
      message: 'You have several high-priority tasks. Focus on one subject at a time for better retention.'
    });
  }

  insights.push({
    type: 'tip',
    title: 'Study Efficiently',
    message: 'Follow the recommended break schedule. Studies show that 50-minute focused sessions with short breaks improve retention by 40%.'
  });

  if (userData.level === 'beginner') {
    insights.push({
      type: 'tip',
      title: 'Start Small',
      message: 'As a beginner, start with 2-3 hour study sessions. Gradually increase as you build stamina.'
    });
  }

  insights.push({
    type: 'success',
    title: 'Plan Created',
    message: 'Your personalized study plan is ready! Follow it for optimal results.'
  });

  return insights;
}

/**
 * Generate reason for subject prioritization
 */
function generateSubjectReason(subjectData) {
  const reasons = [];
  
  if (subjectData.highPriorityTasks > 0) {
    reasons.push(`${subjectData.highPriorityTasks} high-priority task(s)`);
  }
  
  if (subjectData.tasksCount >= 3) {
    reasons.push(`${subjectData.tasksCount} pending tasks`);
  }

  return reasons.length > 0 ? reasons.join(', ') : 'Important subject';
}

module.exports = {
  generateStudyPlan,
  sortTasksByUrgency,
  createDailySchedule,
  prioritizeSubjects,
  calculateBreakIntervals,
  identifyFocusHours,
  generateInsights
};
