# 📁 Project Structure & File Guide

Complete breakdown of every file and folder in the AI Study Planner project.

---

## 📂 Directory Tree

```
ai-study-planner/                 # Root directory
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions CI/CD pipeline
├── backend/                       # Backend server code
│   ├── controllers/              # Request handlers
│   │   ├── authController.js
│   │   ├── taskController.js
│   │   ├── timetableController.js
│   │   └── analyticsController.js
│   ├── models/                   # Database schemas
│   │   ├── User.js
│   │   ├── Task.js
│   │   ├── Timetable.js
│   │   └── Analytics.js
│   ├── routes/                   # API route definitions
│   │   ├── auth.js
│   │   ├── tasks.js
│   │   ├── timetables.js
│   │   └── analytics.js
│   ├── middleware/               # Express middleware
│   │   └── auth.js               # JWT verification
│   ├── utils/                    # Utility functions
│   │   └── aiEngine.js           # AI recommendation logic
│   └── server.js                 # Express server entry point
├── frontend/                      # Frontend code
│   ├── index.html                # Landing page
│   ├── pages/                    # Application pages
│   │   ├── login.html            # Authentication
│   │   ├── dashboard.html        # Main dashboard
│   │   ├── study-planner.html    # AI study planner
│   │   ├── timetable.html        # Schedule manager
│   │   ├── analytics.html        # Progress tracking
│   │   └── settings.html         # User settings
│   ├── css/                      # Stylesheets
│   │   └── styles.css            # All CSS (800+ lines)
│   ├── js/                       # JavaScript files
│   │   └── api.js                # API service client
│   └── assets/                   # Images, icons, etc.
├── .env                          # Environment variables (LOCAL)
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── vercel.json                   # Vercel deployment config
├── setup.bat                     # Windows setup script
├── setup.sh                      # macOS/Linux setup script
├── package.json                  # Dependencies & scripts
├── README.md                     # Main documentation
├── DEPLOYMENT.md                 # GitHub & Vercel guide
├── GITHUB_UPLOAD.md              # Quick upload instructions
├── QUICKSTART.md                 # 1-minute setup
├── FEATURES.md                   # All features listed
├── QUICK_REFERENCE.md            # Quick lookup guide
├── PROJECT_SUMMARY.md            # Project overview
└── COMPLETION_VERIFICATION.md    # Verification checklist
```

---

## 📄 File Descriptions

### 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `.env` | Local environment variables (DO NOT commit) |
| `.env.example` | Template for environment variables |
| `.gitignore` | Files to exclude from Git |
| `vercel.json` | Vercel deployment settings |

### 🚀 Scripts

| File | Purpose | When to Use |
|------|---------|-----------|
| `setup.bat` | Windows automated setup | Windows users, first time |
| `setup.sh` | macOS/Linux automated setup | Mac/Linux users, first time |

### 📚 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Comprehensive project guide (START HERE) |
| `DEPLOYMENT.md` | Detailed deployment instructions |
| `GITHUB_UPLOAD.md` | Quick GitHub & Vercel guide (EASIEST) |
| `QUICKSTART.md` | 5-minute quick start |
| `FEATURES.md` | Complete features reference |
| `QUICK_REFERENCE.md` | Cheat sheet for quick lookup |
| `PROJECT_SUMMARY.md` | Project overview |
| `COMPLETION_VERIFICATION.md` | Feature checklist |
| `FILE_STRUCTURE.md` | This file |

---

## 🔌 Backend Structure

### server.js (65 lines)
**Purpose:** Express server entry point
- Middleware setup (CORS, JSON parser)
- MongoDB connection
- Route mounting
- Static file serving
- Error handling
- Server startup on port 5000

**Key Code:**
```javascript
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/timetables', require('./routes/timetables'));
app.use('/api/analytics', require('./routes/analytics'));
```

---

### Models (4 files, ~150 lines)

#### User.js
**Fields:**
- name (string)
- email (unique string)
- password (hashed)
- level (beginner/intermediate/advanced)
- dailyGoal (hours)
- studySubjects (array)
- createdAt, updatedAt (timestamps)

#### Task.js
**Fields:**
- userId (reference)
- title, subject, description
- dueDate, priority
- estimatedHours, completed
- timestamps

#### Timetable.js
**Fields:**
- userId (reference)
- title
- slots (array with day, subject, time, duration)
- timestamps

#### Analytics.js
**Fields:**
- userId (reference)
- hoursStudied, tasksCompleted, tasksPending
- subjectPerformance (array)
- focusScore, breaksTaken
- timestamps

---

### Controllers (4 files, ~500 lines total)

#### authController.js (~120 lines)
**Functions:**
- `register()` - Create new user account
- `login()` - Authenticate user
- `getProfile()` - Get user info
- `updateProfile()` - Update user settings

#### taskController.js (~130 lines)
**Functions:**
- `createTask()` - Add new task
- `getTasks()` - Get all tasks for user
- `getTodaysTasks()` - Get today's tasks
- `updateTask()` - Edit task
- `deleteTask()` - Remove task

#### timetableController.js (~120 lines)
**Functions:**
- `createTimetable()` - Create schedule
- `getTimetables()` - List all schedules
- `getTimetableById()` - Get specific schedule
- `updateTimetable()` - Edit schedule
- `deleteTimetable()` - Delete schedule

#### analyticsController.js (~150 lines)
**Functions:**
- `generateStudyPlan()` - AI study plan generator
- `getAnalytics()` - Get progress stats
- `recordSession()` - Track study session
- `getInsights()` - Generate AI insights

---

### Routes (4 files, ~80 lines total)

**Route Structure:**
```
/api/auth
  POST /register
  POST /login
  GET /profile
  PUT /profile

/api/tasks
  POST / (create)
  GET / (list)
  GET /:id (detail)
  PUT /:id (update)
  DELETE /:id (delete)
  GET /today (today's tasks)

/api/timetables
  POST / (create)
  GET / (list)
  GET /:id (detail)
  PUT /:id (update)
  DELETE /:id (delete)

/api/analytics
  GET /plan (AI study plan)
  GET /data (analytics data)
  POST /session (record session)
  GET /insights (AI insights)
```

---

### Middleware

#### auth.js (~30 lines)
**Purpose:** JWT token verification
**Function:**
- Verifies JWT in Authorization header
- Extracts userId
- Protects routes from unauthorized access

**Usage:**
```javascript
app.use('/api/tasks', authMiddleware, taskRoutes);
```

---

### Utils

#### aiEngine.js (~400 lines)
**Purpose:** Core AI recommendation engine
**Main Function:**
```javascript
generateStudyPlan(userData, tasks) → {
  dailySchedule,
  prioritizedSubjects,
  recommendedBreaks,
  focusHours,
  insights
}
```

**Sub-Functions:**
- `sortTasksByUrgency()` - Priority sorting
- `createDailySchedule()` - Time slot generation
- `prioritizeSubjects()` - Subject ranking
- `calculateBreakIntervals()` - Pomodoro breaks
- `identifyFocusHours()` - Optimal study times
- `generateInsights()` - AI recommendations

---

## 🎨 Frontend Structure

### index.html (Landing Page)
**Sections:**
1. Navigation bar
2. Hero section with CTA
3. Features showcase (6 features)
4. Statistics section
5. Call-to-action buttons
6. Footer

**Components Used:**
- Cards with gradients
- Buttons with hover effects
- Responsive grid layout

---

### pages/login.html
**Features:**
- Tab switching (Login/Register)
- Email validation
- Password confirmation
- Form submission to API
- JWT token storage
- Auto-redirect to dashboard

**Form Fields:**
- Login: email, password
- Register: name, email, password, confirmPassword, level, studyHours

---

### pages/dashboard.html
**Sections:**
1. Header with user info
2. Study timer (start/pause/reset)
3. Statistics cards (today, weekly, total)
4. Task list with actions
5. Quick add task modal
6. Sidebar navigation

**Features:**
- Real-time timer
- localStorage persistence
- Modal for adding tasks
- Dynamic task loading

---

### pages/study-planner.html
**Sections:**
1. Generate Plan button
2. Daily schedule display
3. Prioritized subjects
4. Recommended breaks
5. Focus hours
6. AI insights

**Renders:**
- Time slots with subjects
- Progress bars for subjects
- Break intervals with icons
- Tips and warnings

---

### pages/timetable.html
**Sections:**
1. Create Timetable button
2. Timetable list
3. Grid view of weekly schedule
4. Add/remove time slots
5. Delete confirmation

**Features:**
- Weekly grid visualization
- Dynamic slot creation
- Time picker inputs
- Subject selection

---

### pages/analytics.html
**Sections:**
1. Period selector (7/30/365 days)
2. Key statistics
3. Subject performance
4. Focus score display
5. Study trends
6. Completion rate

**Charts:**
- Progress bars for subjects
- Statistics cards
- Trend visualization

---

### pages/settings.html
**Tabs:**
1. Profile - Name, level, daily hours, subjects
2. Preferences - Theme, notifications, units
3. Notifications - Push, email settings
4. Account - Password change, delete account

**Features:**
- Form validation
- Toggle switches
- Password change form
- Account deletion with confirmation

---

### css/styles.css (800+ lines)
**Sections:**
1. **Variables** - Colors, shadows, fonts, spacing
2. **Base Styles** - HTML, body, typography
3. **Components** - Buttons, cards, forms, alerts
4. **Layout** - Flex, grid, containers
5. **Navbar & Sidebar** - Navigation styling
6. **Animations** - Keyframes, transitions
7. **Responsive** - Media queries for mobile/tablet
8. **Utilities** - Helper classes

**Color Palette:**
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink)
- Success: #10b981 (Green)
- Warning: #f59e0b (Amber)
- Danger: #ef4444 (Red)

---

### js/api.js (~200 lines)
**Sections:**
1. **Configuration** - Base URL, headers
2. **Auth Functions** - register, login, profile
3. **Task Functions** - CRUD for tasks
4. **Timetable Functions** - CRUD for timetables
5. **Analytics Functions** - Plan generation, insights
6. **Utility Functions** - Notifications, formatting

**Key Functions:**
```javascript
getHeaders() - Add JWT token to requests
apiRequest() - Wrapper for fetch
registerUser() - Register new user
loginUser() - User authentication
getTasks() - Fetch user tasks
generateStudyPlan() - Get AI plan
```

---

## 📊 Database Schema

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  level: String (beginner|intermediate|advanced),
  dailyGoal: Number,
  studySubjects: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Task
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  title: String,
  subject: String,
  description: String,
  dueDate: Date,
  priority: String (low|medium|high),
  estimatedHours: Number,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Timetable
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  title: String,
  slots: [{
    day: String,
    subject: String,
    startTime: String,
    endTime: String,
    duration: Number
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Analytics
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  hoursStudied: Number,
  tasksCompleted: Number,
  tasksPending: Number,
  subjectPerformance: [{
    subject: String,
    hoursSpent: Number,
    tasksCompleted: Number
  }],
  focusScore: Number,
  breaksTaken: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 API Endpoints Summary

| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| POST | `/api/auth/register` | No | Create account |
| POST | `/api/auth/login` | No | Login user |
| GET | `/api/auth/profile` | Yes | Get user info |
| PUT | `/api/auth/profile` | Yes | Update profile |
| GET | `/api/tasks` | Yes | List tasks |
| POST | `/api/tasks` | Yes | Create task |
| GET | `/api/tasks/:id` | Yes | Get task |
| PUT | `/api/tasks/:id` | Yes | Update task |
| DELETE | `/api/tasks/:id` | Yes | Delete task |
| GET | `/api/timetables` | Yes | List timetables |
| POST | `/api/timetables` | Yes | Create timetable |
| GET | `/api/timetables/:id` | Yes | Get timetable |
| PUT | `/api/timetables/:id` | Yes | Update timetable |
| DELETE | `/api/timetables/:id` | Yes | Delete timetable |
| GET | `/api/analytics/plan` | Yes | AI study plan |
| GET | `/api/analytics/data` | Yes | Analytics data |
| POST | `/api/analytics/session` | Yes | Record session |
| GET | `/api/analytics/insights` | Yes | AI insights |

---

## 🚀 Deployment Files

### vercel.json
**Purpose:** Vercel deployment configuration
**Key Settings:**
- Routes configuration
- Environment variables
- Build command
- Function settings

### .github/workflows/deploy.yml
**Purpose:** GitHub Actions CI/CD pipeline
**Features:**
- Runs on push to main
- Installs dependencies
- Runs tests
- Deploys to Vercel

---

## 📦 Dependencies

### Production (Backend)

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework |
| mongoose | ^7.5.0 | MongoDB ODM |
| bcryptjs | ^2.4.3 | Password hashing |
| jsonwebtoken | ^9.1.2 | JWT tokens |
| cors | ^2.8.5 | Cross-origin requests |
| dotenv | ^16.3.1 | Environment variables |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.0.1 | Auto-reload server |

---

## 🎯 File Sizes (Approximate)

```
Backend Code:           ~1,500 lines (15 KB)
Frontend HTML:          ~2,500 lines (45 KB)
Frontend CSS:           ~800 lines (25 KB)
Frontend JavaScript:    ~200 lines (8 KB)
Documentation:          ~2,000 lines (50 KB)
Config & Setup:         ~100 lines (3 KB)
────────────────────────
TOTAL:                  ~6,700 lines (146 KB)
```

---

## 🔍 Key Code Locations

| Feature | File | Function |
|---------|------|----------|
| User auth | backend/controllers/authController.js | register(), login() |
| Task CRUD | backend/controllers/taskController.js | createTask(), deleteTask() |
| AI Engine | backend/utils/aiEngine.js | generateStudyPlan() |
| Dashboard | frontend/pages/dashboard.html | Page with timer |
| Study Planner | frontend/pages/study-planner.html | AI recommendations |
| Analytics | frontend/pages/analytics.html | Progress tracking |
| Styling | frontend/css/styles.css | All CSS (800+ lines) |
| API Client | frontend/js/api.js | All API calls |

---

## 📝 Development Workflow

1. **Edit files** in your preferred editor
2. **Commit changes:** `git add . && git commit -m "message"`
3. **Push changes:** `git push origin main`
4. **Vercel auto-deploys** on push to main
5. **Check logs** in Vercel dashboard if issues

---

## ✅ Verification Checklist

- [ ] All backend files exist in `backend/` folder
- [ ] All frontend files exist in `frontend/` folder
- [ ] Database models are in `backend/models/`
- [ ] Controllers are in `backend/controllers/`
- [ ] Routes are in `backend/routes/`
- [ ] CSS is in `frontend/css/styles.css`
- [ ] API client is in `frontend/js/api.js`
- [ ] `package.json` has all dependencies
- [ ] `.gitignore` excludes `node_modules/` and `.env`
- [ ] `vercel.json` is configured
- [ ] Documentation files are complete

---

**For more information, see the main [README.md](README.md)**

