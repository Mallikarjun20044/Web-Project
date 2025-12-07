const Timetable = require('../models/Timetable');

/**
 * Create a new timetable
 */
exports.createTimetable = async (req, res) => {
  try {
    const { title, slots } = req.body;

    if (!title || !slots || slots.length === 0) {
      return res.status(400).json({ message: 'Title and slots are required' });
    }

    // Calculate duration for each slot
    const processedSlots = slots.map(slot => {
      const [startHour, startMin] = slot.startTime.split(':').map(Number);
      const [endHour, endMin] = slot.endTime.split(':').map(Number);
      const duration = (endHour * 60 + endMin) - (startHour * 60 + startMin);

      return {
        ...slot,
        duration: duration
      };
    });

    const newTimetable = new Timetable({
      userId: req.user.userId,
      title,
      slots: processedSlots
    });

    await newTimetable.save();

    res.status(201).json({
      message: 'Timetable created successfully',
      timetable: newTimetable
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create timetable', error: error.message });
  }
};

/**
 * Get all timetables for user
 */
exports.getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.status(200).json({ timetables });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch timetables', error: error.message });
  }
};

/**
 * Get timetable by ID
 */
exports.getTimetableById = async (req, res) => {
  try {
    const timetable = await Timetable.findOne({ _id: req.params.id, userId: req.user.userId });
    
    if (!timetable) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    res.status(200).json({ timetable });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch timetable', error: error.message });
  }
};

/**
 * Update timetable
 */
exports.updateTimetable = async (req, res) => {
  try {
    const { title, slots } = req.body;

    const updateData = {};
    if (title) updateData.title = title;
    
    if (slots) {
      // Calculate duration for each slot
      updateData.slots = slots.map(slot => {
        const [startHour, startMin] = slot.startTime.split(':').map(Number);
        const [endHour, endMin] = slot.endTime.split(':').map(Number);
        const duration = (endHour * 60 + endMin) - (startHour * 60 + startMin);

        return {
          ...slot,
          duration: duration
        };
      });
    }

    updateData.updatedAt = new Date();

    const timetable = await Timetable.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      updateData,
      { new: true }
    );

    if (!timetable) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    res.status(200).json({
      message: 'Timetable updated successfully',
      timetable
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update timetable', error: error.message });
  }
};

/**
 * Delete timetable
 */
exports.deleteTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });

    if (!timetable) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    res.status(200).json({ message: 'Timetable deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete timetable', error: error.message });
  }
};
