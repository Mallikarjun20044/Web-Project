const Task = require('../models/Task');

/**
 * Create a new task
 */
exports.createTask = async (req, res) => {
  try {
    const { title, subject, description, dueDate, priority, estimatedHours } = req.body;

    if (!title || !subject || !dueDate) {
      return res.status(400).json({ message: 'Title, subject, and due date are required' });
    }

    const newTask = new Task({
      userId: req.user.userId,
      title,
      subject,
      description: description || '',
      dueDate: new Date(dueDate),
      priority: priority || 'medium',
      estimatedHours: estimatedHours || 1
    });

    await newTask.save();

    res.status(201).json({
      message: 'Task created successfully',
      task: newTask
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

/**
 * Get all tasks for user
 */
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId }).sort({ dueDate: 1 });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
};

/**
 * Get task by ID
 */
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, userId: req.user.userId });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch task', error: error.message });
  }
};

/**
 * Update task
 */
exports.updateTask = async (req, res) => {
  try {
    const { title, subject, description, dueDate, priority, estimatedHours, completed } = req.body;

    const updateData = {};
    if (title) updateData.title = title;
    if (subject) updateData.subject = subject;
    if (description !== undefined) updateData.description = description;
    if (dueDate) updateData.dueDate = new Date(dueDate);
    if (priority) updateData.priority = priority;
    if (estimatedHours) updateData.estimatedHours = estimatedHours;
    if (completed !== undefined) {
      updateData.completed = completed;
      if (completed) {
        updateData.completedAt = new Date();
      }
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      updateData,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({
      message: 'Task updated successfully',
      task
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};

/**
 * Delete task
 */
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};

/**
 * Get today's tasks
 */
exports.getTodaysTasks = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const tasks = await Task.find({
      userId: req.user.userId,
      dueDate: { $gte: today, $lt: tomorrow }
    }).sort({ priority: -1 });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch today\'s tasks', error: error.message });
  }
};
