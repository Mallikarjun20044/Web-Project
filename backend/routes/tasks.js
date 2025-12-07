const express = require('express');
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

/**
 * All routes require authentication
 */
router.use(authenticateToken);

// Task CRUD operations
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/today', taskController.getTodaysTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
