const mongoose = require('mongoose');

/**
 * Analytics Schema - Stores study analytics and progress data
 */
const analyticsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  hoursStudied: {
    type: Number,
    default: 0
  },
  tasksCompleted: {
    type: Number,
    default: 0
  },
  tasksPending: {
    type: Number,
    default: 0
  },
  subjectPerformance: [{
    subject: String,
    hoursSpent: Number,
    tasksCompleted: Number
  }],
  breaksTaken: {
    type: Number,
    default: 0
  },
  focusScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
