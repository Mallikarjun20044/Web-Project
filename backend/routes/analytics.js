const express = require('express');
const analyticsController = require('../controllers/analyticsController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

/**
 * All routes require authentication
 */
router.use(authenticateToken);

// Analytics routes
router.get('/plan', analyticsController.generateStudyPlan);
router.get('/data', analyticsController.getAnalytics);
router.get('/insights', analyticsController.getInsights);
router.post('/session', analyticsController.recordSession);

module.exports = router;
