# 🎯 AI Study Planner - Quick Reference Card

## ⚡ 60-Second Setup

```bash
cd ai-study-planner
npm install
mongod                    # In separate terminal
npm run dev              # This terminal
# Open: http://localhost:5000
```

---

## 📱 All Pages at a Glance

| Page | URL | Purpose |
|------|-----|---------|
| Landing | `/` | Welcome & features |
| Login | `/pages/login.html` | Register/Login |
| Dashboard | `/pages/dashboard.html` | Overview & tasks |
| AI Planner | `/pages/study-planner.html` | Smart recommendations |
| Timetable | `/pages/timetable.html` | Schedule manager |
| Analytics | `/pages/analytics.html` | Progress tracking |
| Settings | `/pages/settings.html` | Profile & preferences |

---

## 🔌 Key API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`

### Tasks
- `POST /api/tasks`
- `GET /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Timetables
- `POST /api/timetables`
- `GET /api/timetables`
- `PUT /api/timetables/:id`

### Analytics & AI
- `GET /api/analytics/plan` → AI study plan
- `GET /api/analytics/data` → Progress data
- `POST /api/analytics/session` → Track session

---

## 🤖 AI Functions

```javascript
generateStudyPlan(userData, tasks) → {
  dailySchedule,
  prioritizedSubjects,
  recommendedBreaks,
  focusHours,
  insights
}
```

---

## 💾 Database Connection

```javascript
// Local MongoDB
mongodb://localhost:27017/ai-study-planner

// MongoDB Atlas (Cloud)
mongodb+srv://user:password@cluster.mongodb.net/db
```

---

## 🎨 Key Colors

| Color | Hex | Use |
|-------|-----|-----|
| Primary | #6366f1 | Main brand |
| Secondary | #ec4899 | Accents |
| Success | #10b981 | Completed |
| Warning | #f59e0b | Attention |
| Danger | #ef4444 | Delete |

---

## 📝 Common Tasks

### Add a Task (Frontend)
```javascript
API.createTask("Title", "Subject", "Desc", "2025-12-20", "high", 2)
```

### Get Study Plan (Frontend)
```javascript
const plan = await API.generateStudyPlan()
console.log(plan.dailySchedule)
```

### Create Timetable (Frontend)
```javascript
API.createTimetable("My Schedule", [{
  day: "Monday",
  subject: "Math",
  startTime: "09:00",
  endTime: "10:30"
}])
```

### Track Session (Frontend)
```javascript
API.recordSession({
  hoursStudied: 2,
  tasksCompleted: 1,
  focusScore: 85
})
```

---

## 🔧 Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/ai-study-planner
PORT=5000
JWT_SECRET=your-secret-key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

---

## 📁 Important Files

| Path | Description |
|------|-------------|
| `backend/server.js` | Express server |
| `backend/utils/aiEngine.js` | AI logic |
| `frontend/css/styles.css` | All styling |
| `frontend/js/api.js` | API client |
| `.env` | Configuration |
| `package.json` | Dependencies |

---

## ✅ What's Included

✅ 7 complete pages  
✅ 30+ API endpoints  
✅ AI study plan generator  
✅ Task management system  
✅ Timetable scheduler  
✅ Analytics dashboard  
✅ 800+ lines of CSS  
✅ 400+ lines of AI code  
✅ Full documentation  

---

## 🚀 Commands

```bash
npm install          # Install dependencies
npm start           # Run production
npm run dev         # Run development (with auto-reload)
```

---

## 📞 Quick Help

**MongoDB not running?**
```bash
mongod
```

**Port 5000 in use?**
Update PORT in `.env`

**Clear browser storage?**
```javascript
localStorage.clear()
```

**Check backend status?**
Visit: `http://localhost:5000/api/health`

---

## 📊 Sample API Request

```javascript
// Register
fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    password: "password123"
  })
})
```

---

## 🎯 Feature Quick Guide

### Dashboard
- Add tasks with **+ Add Task**
- Start/Pause timer with buttons
- See today's overview

### AI Planner
- Click **Generate Plan**
- View schedule & recommendations
- See focus hours & breaks

### Timetable
- Click **+ Create Timetable**
- Add time slots
- View weekly grid

### Analytics
- Select time period (7/30/365 days)
- See subject performance
- Check study trends

---

## 🔐 Security Notes

🔒 Always change JWT_SECRET in production  
🔒 Use HTTPS in production  
🔒 Keep .env file private  
🔒 Never commit .env to git  

---

## 📱 Responsive Breakpoints

```
Mobile:    < 480px
Tablet:    480px - 768px
Desktop:   768px - 1024px
Large:     > 1024px
```

---

## 🎓 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Comprehensive guide |
| QUICKSTART.md | 5-minute setup |
| PROJECT_SUMMARY.md | What's included |
| FEATURES.md | Complete feature list |
| COMPLETION_VERIFICATION.md | Verification checklist |

---

## 💡 Pro Tips

💡 Add 5+ tasks for AI to work best  
💡 Set realistic due dates  
💡 Use all priority levels  
💡 Review analytics weekly  
💡 Create multiple timetables  
💡 Track sessions daily  

---

## 🆘 Troubleshooting Quick Reference

| Problem | Solution |
|---------|----------|
| MongoDB error | Run `mongod` |
| CORS error | Check API URL in api.js |
| Login fails | Check MongoDB connection |
| Tasks not showing | Refresh browser |
| API not responding | Check backend console |
| Timer not working | Clear localStorage |

---

**🎉 You're all set! Start building with AI Study Planner today!**

For more details, see README.md  
For setup help, see QUICKSTART.md  
For all features, see FEATURES.md
