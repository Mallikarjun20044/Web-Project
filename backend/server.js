const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

/**
 * Middleware
 */
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

/**
 * Database Connection
 */
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-study-planner';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✓ MongoDB connected'))
.catch(err => console.error('✗ MongoDB connection error:', err));

/**
 * Routes
 */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/timetables', require('./routes/timetables'));
app.use('/api/analytics', require('./routes/analytics'));

/**
 * Health Check
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

/**
 * Serve Frontend - Root route
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

/**
 * Serve HTML pages from /pages/ directory
 */
app.get('/pages/:page', (req, res) => {
  const pagePath = path.join(frontendPath, 'pages', req.params.page);
  res.sendFile(pagePath);
});

// SPA fallback - serve index.html for all other non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api') && !req.path.startsWith('/css') && !req.path.startsWith('/js') && !req.path.startsWith('/assets')) {
    res.sendFile(path.join(frontendPath, 'index.html'));
  }
});

/**
 * Error Handling
 */
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

/**
 * Start Server
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 AI Study Planner Backend Server`);
  console.log(`📍 Running on http://localhost:${PORT}`);
  console.log(`📊 MongoDB: ${mongoURI}\n`);
});
