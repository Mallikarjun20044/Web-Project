const express = require('express');
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

/**
 * Public Routes
 */
router.post('/register', authController.register);
router.post('/login', authController.login);

/**
 * Protected Routes
 */
router.get('/profile', authenticateToken, authController.getProfile);
router.put('/profile', authenticateToken, authController.updateProfile);

module.exports = router;
