/**
 * ========================================
 * API Service - Frontend API Communication
 * ========================================
 */

// Determine API base URL based on environment
const API_BASE_URL = (() => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
    // Production - use relative path (same domain)
    return `${protocol}//${window.location.host}/api`;
  }
  return 'http://localhost:5000/api';
})();

/**
 * Get stored JWT token from localStorage
 */
function getAuthToken() {
  return localStorage.getItem('authToken');
}

/**
 * Set JWT token in localStorage
 */
function setAuthToken(token) {
  localStorage.setItem('authToken', token);
}

/**
 * Clear authentication token
 */
function clearAuthToken() {
  localStorage.removeItem('authToken');
}

/**
 * Get headers with authentication
 */
function getHeaders(includeAuth = true) {
  const headers = {
    'Content-Type': 'application/json'
  };
  
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
}

/**
 * Make API request
 */
async function apiRequest(endpoint, method = 'GET', body = null, includeAuth = true) {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: getHeaders(includeAuth)
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * ========== AUTH API CALLS ==========
 */

async function registerUser(name, email, password) {
  return apiRequest('/auth/register', 'POST', { name, email, password }, false);
}

async function loginUser(email, password) {
  return apiRequest('/auth/login', 'POST', { email, password }, false);
}

async function getProfile() {
  return apiRequest('/auth/profile', 'GET');
}

async function updateProfile(updates) {
  return apiRequest('/auth/profile', 'PUT', updates);
}

/**
 * ========== TASK API CALLS ==========
 */

async function createTask(title, subject, description, dueDate, priority, estimatedHours) {
  return apiRequest('/tasks', 'POST', {
    title,
    subject,
    description,
    dueDate,
    priority,
    estimatedHours
  });
}

async function getTasks() {
  return apiRequest('/tasks', 'GET');
}

async function getTodaysTasks() {
  return apiRequest('/tasks/today', 'GET');
}

async function getTaskById(id) {
  return apiRequest(`/tasks/${id}`, 'GET');
}

async function updateTask(id, updates) {
  return apiRequest(`/tasks/${id}`, 'PUT', updates);
}

async function deleteTask(id) {
  return apiRequest(`/tasks/${id}`, 'DELETE');
}

/**
 * ========== TIMETABLE API CALLS ==========
 */

async function createTimetable(title, slots) {
  return apiRequest('/timetables', 'POST', { title, slots });
}

async function getTimetables() {
  return apiRequest('/timetables', 'GET');
}

async function getTimetableById(id) {
  return apiRequest(`/timetables/${id}`, 'GET');
}

async function updateTimetable(id, updates) {
  return apiRequest(`/timetables/${id}`, 'PUT', updates);
}

async function deleteTimetable(id) {
  return apiRequest(`/timetables/${id}`, 'DELETE');
}

/**
 * ========== ANALYTICS API CALLS ==========
 */

async function generateStudyPlan() {
  return apiRequest('/analytics/plan', 'GET');
}

async function getAnalytics(days = 7) {
  return apiRequest(`/analytics/data?days=${days}`, 'GET');
}

async function recordSession(session) {
  return apiRequest('/analytics/session', 'POST', session);
}

async function getInsights() {
  return apiRequest('/analytics/insights', 'GET');
}

/**
 * ========== UTILITY FUNCTIONS ==========
 */

/**
 * Show notification to user
 */
function showNotification(message, type = 'info', duration = 3000) {
  const notificationContainer = document.getElementById('notification-container') || 
                                 createNotificationContainer();
  
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} animate-in`;
  notification.innerHTML = `<span>${message}</span>`;
  
  notificationContainer.appendChild(notification);
  
  if (duration > 0) {
    setTimeout(() => {
      notification.remove();
    }, duration);
  }
  
  return notification;
}

/**
 * Create notification container if it doesn't exist
 */
function createNotificationContainer() {
  const container = document.createElement('div');
  container.id = 'notification-container';
  container.style.cssText = `
    position: fixed;
    top: 80px;
    right: 1rem;
    z-index: 3000;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;
  document.body.appendChild(container);
  return container;
}

/**
 * Format date to readable format
 */
function formatDate(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Format date and time
 */
function formatDateTime(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Get days until date
 */
function getDaysUntil(date) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  
  const diff = date - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Check if user is authenticated
 */
function isAuthenticated() {
  return !!getAuthToken();
}

/**
 * Redirect to login if not authenticated
 */
function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = '/pages/login.html';
  }
}

/**
 * Logout user
 */
function logout() {
  clearAuthToken();
  localStorage.removeItem('user');
  window.location.href = '/pages/login.html';
}

/**
 * Export all functions
 */
const API = {
  // Auth
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  
  // Tasks
  createTask,
  getTasks,
  getTodaysTasks,
  getTaskById,
  updateTask,
  deleteTask,
  
  // Timetables
  createTimetable,
  getTimetables,
  getTimetableById,
  updateTimetable,
  deleteTimetable,
  
  // Analytics
  generateStudyPlan,
  getAnalytics,
  recordSession,
  getInsights,
  
  // Utility
  showNotification,
  formatDate,
  formatDateTime,
  getDaysUntil,
  isAuthenticated,
  requireAuth,
  logout,
  getAuthToken,
  setAuthToken,
  clearAuthToken
};
