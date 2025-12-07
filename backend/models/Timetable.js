const mongoose = require('mongoose');

/**
 * Timetable Schema - Stores study schedule with time slots
 */
const timetableSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  slots: [{
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    startTime: {
      type: String,
      required: true // Format: HH:MM (24-hour)
    },
    endTime: {
      type: String,
      required: true // Format: HH:MM (24-hour)
    },
    duration: {
      type: Number // in minutes
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Timetable', timetableSchema);
