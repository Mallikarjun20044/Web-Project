const express = require('express');
const timetableController = require('../controllers/timetableController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

/**
 * All routes require authentication
 */
router.use(authenticateToken);

// Timetable CRUD operations
router.post('/', timetableController.createTimetable);
router.get('/', timetableController.getTimetables);
router.get('/:id', timetableController.getTimetableById);
router.put('/:id', timetableController.updateTimetable);
router.delete('/:id', timetableController.deleteTimetable);

module.exports = router;
