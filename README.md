# 📚 AI Study Planner - Complete Guide

A full-stack, AI-powered web application that helps students plan, schedule, and track their study sessions with intelligent recommendations.

**🚀 Live Demo:** *Deploy to get your URL*  
**📊 GitHub:** https://github.com/Mallikarjun20044/Web-Project

---

## 📖 Quick Navigation

| Guide | Purpose |
|-------|---------|
| **[START_HERE.md](./START_HERE.md)** | 🎯 **Begin here for deployment!** |
| **[DEPLOY_NOW.md](./DEPLOY_NOW.md)** | ⚡ **10-minute GitHub → Vercel deployment** |
| **[GITHUB_UPLOAD.md](./GITHUB_UPLOAD.md)** | 📱 Simple GitHub upload instructions |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | 🚀 Detailed deployment with troubleshooting |
| **[PATH_FIX_GUIDE.md](./PATH_FIX_GUIDE.md)** | 🔧 All file path issues fixed |
| **[QUICKSTART.md](./QUICKSTART.md)** | ⚡ Local development setup |
| **[FEATURES.md](./FEATURES.md)** | ✨ Complete feature list |
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | 🎯 Quick lookup cheat sheet |
| **[FILE_STRUCTURE.md](./FILE_STRUCTURE.md)** | 📁 Complete project structure |

---

## 🚀 Deploy to Vercel in 10 Minutes

### Option 1: Automated (Easiest!)
```powershell
.\git-init.bat
# Follow prompts, then see DEPLOY_NOW.md
```

### Option 2: Manual
**👉 Complete instructions:** [DEPLOY_NOW.md](./DEPLOY_NOW.md)

1. Upload to GitHub (use git-init.bat)
2. Setup MongoDB Atlas (free tier)
3. Deploy to Vercel (auto-deploy on push)
4. Add 5 environment variables
5. Live! ✅

---

## 🎯 Features

### ✅ Core Functionality
- **User Authentication** - Secure sign-up and login with JWT tokens
- **Dashboard** - Overview of today's tasks, progress, and study time tracker
- **AI Study Planner** - Intelligent daily schedule recommendations and subject prioritization
- **Timetable Manager** - Create and manage weekly study schedules with drag-and-drop
- **Task Management** - Add, edit, delete, and track study tasks by priority
- **Analytics** - Track study hours, completion rates, and subject-wise performance
- **Settings** - Manage profile, preferences, and account settings
- **Notifications** - In-app alerts and reminders

### 🤖 AI Features
- **Smart Study Plan Generation** - Rule-based AI that recommends daily schedules
- **Subject Prioritization** - Intelligent ranking based on deadlines and priority
- **Break Intervals** - Pomodoro-based break recommendations
- **Peak Productivity Hours** - Identifies optimal study times
- **AI Insights** - Personalized tips and warnings based on workload

### 🎨 UI/UX Features
- **Modern Design** - Gradient backgrounds, soft shadows, smooth animations
- **Responsive Layout** - Fully mobile-friendly interface
- **Dark Mode Support** - Eye-friendly dark theme (ready for implementation)
- **Smooth Transitions** - CSS animations for seamless navigation
- **Reusable Components** - Cards, badges, alerts, modals, and more

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No framework dependencies, lightweight and fast
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Secure authentication
- **BCryptjs** - Password hashing

### Additional Libraries
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

---

## 📁 Project Structure

```
ai-study-planner/
├── backend/
│   ├── models/
│   │   ├── User.js           # User schema
│   │   ├── Task.js           # Task schema
│   │   ├── Timetable.js      # Timetable schema
│   │   └── Analytics.js      # Analytics schema
│   ├── controllers/
│   │   ├── authController.js       # Authentication logic
│   │   ├── taskController.js       # Task CRUD operations
│   │   ├── timetableController.js  # Timetable management
│   │   └── analyticsController.js  # Analytics & AI
│   ├── routes/
│   │   ├── auth.js           # Auth endpoints
│   │   ├── tasks.js          # Task endpoints
│   │   ├── timetables.js     # Timetable endpoints
│   │   └── analytics.js      # Analytics endpoints
│   ├── middleware/
│   │   └── auth.js           # JWT verification
│   ├── utils/
│   │   └── aiEngine.js       # AI study plan generation
│   └── server.js             # Express server setup
├── frontend/
│   ├── index.html            # Landing page
│   ├── css/
│   │   └── styles.css        # Global styles
│   ├── js/
│   │   └── api.js            # API service
│   └── pages/
│       ├── login.html        # Login/Register page
│       ├── dashboard.html    # Main dashboard
│       ├── study-planner.html  # AI study planner
│       ├── timetable.html    # Timetable manager
│       ├── analytics.html    # Analytics page
│       └── settings.html     # Settings page
├── package.json              # Dependencies
├── .env                      # Environment variables
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud)
- **npm** or **yarn**

### Installation Steps

#### 1. Clone or Download the Project
```bash
cd ai-study-planner
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the root directory (copy from `.env.example`):

```env
# MongoDB Connection (local)
MONGODB_URI=mongodb://localhost:27017/ai-study-planner

# For MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-study-planner

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-key-change-this

# Frontend URL
CORS_ORIGIN=http://localhost:3000
```

#### 4. Start MongoDB
**Local MongoDB:**
```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community
# or
sudo systemctl start mongod
```

**Cloud MongoDB (Atlas):**
- Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get connection string
- Update `MONGODB_URI` in `.env`

#### 5. Start the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

#### 6. Access the Application
Open your browser and navigate to:
```
http://localhost:5000
```

---

## 📖 API Documentation

### Authentication Endpoints

#### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "level": "intermediate",
  "dailyGoal": 4,
  "studySubjects": ["Math", "Physics"]
}

Response: { token, user }
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: { token, user }
```

#### Get Profile
```
GET /api/auth/profile
Authorization: Bearer <token>

Response: { user }
```

#### Update Profile
```
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "level": "advanced",
  "dailyGoal": 5,
  "studySubjects": ["Math", "Physics", "Chemistry"]
}

Response: { user }
```

### Task Endpoints

#### Create Task
```
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Chapter 5 Review",
  "subject": "Mathematics",
  "description": "Review chapter 5 from textbook",
  "dueDate": "2025-12-15",
  "priority": "high",
  "estimatedHours": 2
}

Response: { task }
```

#### Get All Tasks
```
GET /api/tasks
Authorization: Bearer <token>

Response: { tasks }
```

#### Get Today's Tasks
```
GET /api/tasks/today
Authorization: Bearer <token>

Response: { tasks }
```

#### Get Task by ID
```
GET /api/tasks/:id
Authorization: Bearer <token>

Response: { task }
```

#### Update Task
```
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "completed": true
}

Response: { task }
```

#### Delete Task
```
DELETE /api/tasks/:id
Authorization: Bearer <token>

Response: { message }
```

### Timetable Endpoints

#### Create Timetable
```
POST /api/timetables
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Weekly Schedule",
  "slots": [
    {
      "day": "Monday",
      "subject": "Mathematics",
      "startTime": "09:00",
      "endTime": "10:30"
    }
  ]
}

Response: { timetable }
```

#### Get All Timetables
```
GET /api/timetables
Authorization: Bearer <token>

Response: { timetables }
```

#### Get Timetable by ID
```
GET /api/timetables/:id
Authorization: Bearer <token>

Response: { timetable }
```

#### Update Timetable
```
PUT /api/timetables/:id
Authorization: Bearer <token>
Content-Type: application/json

{ /* update data */ }

Response: { timetable }
```

#### Delete Timetable
```
DELETE /api/timetables/:id
Authorization: Bearer <token>

Response: { message }
```

### Analytics Endpoints

#### Generate AI Study Plan
```
GET /api/analytics/plan
Authorization: Bearer <token>

Response: {
  plan: {
    dailySchedule: [],
    prioritizedSubjects: [],
    recommendedBreaks: [],
    focusHours: [],
    insights: []
  }
}
```

#### Get Analytics Data
```
GET /api/analytics/data?days=7
Authorization: Bearer <token>

Response: { analytics }
```

#### Get AI Insights
```
GET /api/analytics/insights
Authorization: Bearer <token>

Response: { insights }
```

#### Record Study Session
```
POST /api/analytics/session
Authorization: Bearer <token>
Content-Type: application/json

{
  "hoursStudied": 2,
  "tasksCompleted": 1,
  "tasksPending": 3,
  "breaksTaken": 2,
  "focusScore": 85,
  "subjectPerformance": [
    {
      "subject": "Math",
      "hoursSpent": 2,
      "tasksCompleted": 1
    }
  ]
}

Response: { record }
```

---

## 🤖 AI Engine Documentation

### AI Study Plan Generation

The AI engine in `backend/utils/aiEngine.js` provides intelligent study recommendations:

#### Main Function: `generateStudyPlan(userData, tasks)`

**Parameters:**
- `userData` - User profile (level, availableHours, subjects)
- `tasks` - Array of pending tasks

**Returns:**
```javascript
{
  dailySchedule: [
    {
      subject: "Mathematics",
      task: "Chapter 5 Review",
      startTime: "09:00",
      endTime: "10:30",
      duration: 1.5,
      breakAfter: true,
      priority: "high"
    }
  ],
  prioritizedSubjects: [
    {
      subject: "Mathematics",
      priority: "high",
      pendingTasks: 3,
      estimatedHours: 5,
      reason: "3 high-priority tasks due soon"
    }
  ],
  recommendedBreaks: [
    {
      sessionNumber: 1,
      breakDuration: 10,
      reason: "Quick refresh break"
    }
  ],
  focusHours: [
    {
      time: "9:00 - 12:00",
      description: "Morning focus hours - Peak mental clarity",
      productivity: 95
    }
  ],
  insights: [
    {
      type: "warning",
      title: "Heavy Workload Ahead",
      message: "You have 20 hours of work with only 5 days..."
    }
  ]
}
```

#### Supporting Functions

1. **sortTasksByUrgency(tasks)** - Sorts by deadline and priority
2. **createDailySchedule(userData, tasks)** - Creates hourly schedule
3. **prioritizeSubjects(tasks, userData)** - Ranks subjects by urgency
4. **calculateBreakIntervals(availableHours)** - Pomodoro breaks
5. **identifyFocusHours(userData)** - Optimal study times
6. **generateInsights(userData, tasks)** - AI tips and warnings

---

## 🎓 Usage Examples

### Example 1: Student Registration and First Login

```javascript
// Frontend: Register
await API.registerUser("Alice Johnson", "alice@example.com", "password123");

// Backend: Creates user with initial study profile
// Frontend: Automatically logs in and redirects to dashboard
```

### Example 2: Adding Tasks and Getting AI Plan

```javascript
// Add a task
await API.createTask(
  "Calculus Homework",
  "Mathematics",
  "Complete exercises 1-20",
  "2025-12-20",
  "high",
  3
);

// Get AI study plan
const plan = await API.generateStudyPlan();
// Returns optimized schedule based on all tasks and deadlines
```

### Example 3: Creating a Weekly Timetable

```javascript
await API.createTimetable("My Weekly Schedule", [
  {
    day: "Monday",
    subject: "Mathematics",
    startTime: "09:00",
    endTime: "10:30"
  },
  {
    day: "Monday",
    subject: "Physics",
    startTime: "11:00",
    endTime: "12:30"
  }
]);
```

### Example 4: Tracking Progress

```javascript
// Record a study session
await API.recordSession({
  hoursStudied: 2.5,
  tasksCompleted: 2,
  tasksPending: 3,
  breaksTaken: 3,
  focusScore: 90,
  subjectPerformance: [
    { subject: "Math", hoursSpent: 2.5, tasksCompleted: 2 }
  ]
});

// Get analytics
const analytics = await API.getAnalytics(7);
// Shows weekly progress, completion rate, focus score, etc.
```

---

## 🎨 Customization Guide

### Changing Colors

Edit `/frontend/css/styles.css` root variables:
```css
:root {
  --primary: #6366f1;      /* Main brand color */
  --secondary: #ec4899;    /* Accent color */
  --success: #10b981;      /* Success color */
  --warning: #f59e0b;      /* Warning color */
  --danger: #ef4444;       /* Danger color */
}
```

### Adding New Pages

1. Create `frontend/pages/newpage.html`
2. Follow the existing structure (navbar + sidebar + content)
3. Import `api.js` and add script logic
4. Add link in navbar and sidebar

### Extending AI Logic

Edit `backend/utils/aiEngine.js`:
```javascript
// Add new insight type
insights.push({
  type: "custom",
  title: "Your Title",
  message: "Your message based on custom logic"
});
```

---

## 🔐 Security Best Practices

1. **Change JWT Secret** - Update `JWT_SECRET` in `.env` for production
2. **Use HTTPS** - Enable SSL in production
3. **Validate Input** - All API inputs are validated
4. **Secure Passwords** - Passwords hashed with bcryptjs
5. **CORS Configuration** - Update `CORS_ORIGIN` for your domain

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:** Ensure MongoDB is running
```bash
mongod  # Start MongoDB service
```

### Port 5000 Already in Use
```bash
# Change PORT in .env or find process using port
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows
```

### CORS Errors
Update `CORS_ORIGIN` in `.env` to match your frontend URL

### Blank Dashboard
Check browser console for API errors. Ensure:
- Backend is running on port 5000
- JWT token is valid
- MongoDB is connected

---

## 📊 Example Dummy Data

The app works better with data. Here's sample data to add:

```javascript
// Sample tasks
const tasks = [
  {
    title: "Chapter 3 Review",
    subject: "Chemistry",
    dueDate: "2025-12-15",
    priority: "high",
    estimatedHours: 3
  },
  {
    title: "Essay Writing",
    subject: "English",
    dueDate: "2025-12-18",
    priority: "medium",
    estimatedHours: 2
  }
];

// Sample timetable
const timetable = {
  title: "Weekly Schedule",
  slots: [
    { day: "Monday", subject: "Math", startTime: "09:00", endTime: "10:30" },
    { day: "Monday", subject: "Physics", startTime: "11:00", endTime: "12:30" },
    { day: "Tuesday", subject: "Chemistry", startTime: "14:00", endTime: "15:30" }
  ]
};
```

---

## 📱 Mobile Responsiveness

The app is fully responsive:
- **Desktop** (1024px+) - Full layout with sidebar
- **Tablet** (768px - 1023px) - Adjusted grid
- **Mobile** (< 768px) - Single column, collapsible navigation

---

## 🚀 Deployment

### Deploy Backend to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set JWT_SECRET=your-secret
heroku config:set MONGODB_URI=your-mongodb-uri

# Deploy
git push heroku main
```

### Deploy Frontend to Vercel/Netlify

```bash
# Vercel
npm install -g vercel
vercel

# Update API_BASE_URL in api.js to your backend URL
```

---

## 📝 License

MIT License - Feel free to use this project for personal and educational purposes.

---

## 👨‍💻 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the API documentation
3. Check browser console for errors
4. Ensure all services are running

---

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] PDF export of schedules
- [ ] Mobile app (React Native)
- [ ] Real-time collaboration
- [ ] Advanced AI with ML models
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Study group features
- [ ] Progress graphs
- [ ] Habit tracking

---

**Happy Studying! 📚✨**

Built with ❤️ for students everywhere.
