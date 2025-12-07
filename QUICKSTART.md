# 🚀 AI Study Planner - Quick Start Guide

## One-Minute Setup

### 1. Install Dependencies (30 seconds)
```bash
cd ai-study-planner
npm install
```

### 2. Start MongoDB (15 seconds)
```bash
# Make sure MongoDB is running on your system
mongod
```

### 3. Start the Server (15 seconds)
```bash
npm run dev
```

You'll see:
```
✓ MongoDB connected
🚀 AI Study Planner Backend Server
📍 Running on http://localhost:5000
```

### 4. Open Browser
```
http://localhost:5000
```

---

## 📱 Test the App

### Create Account
1. Click "Sign In" → "Sign Up"
2. Fill in details and create account
3. Automatically logged in and redirected to dashboard

### Add Your First Task
1. Click "+ Add Task" on dashboard
2. Fill in: Task title, subject, due date, priority
3. Click "Add Task"

### Get AI Study Plan
1. Click "AI Planner" in navigation
2. Click "Generate Plan"
3. View your personalized study schedule

### Create Timetable
1. Click "Timetable" in navigation
2. Click "+ Create Timetable"
3. Add time slots for each day
4. View in weekly grid format

---

## 🔧 File Locations

| File | Purpose |
|------|---------|
| `backend/server.js` | Main Express server |
| `backend/utils/aiEngine.js` | AI study plan logic |
| `frontend/index.html` | Landing page |
| `frontend/pages/dashboard.html` | Main dashboard |
| `frontend/pages/study-planner.html` | AI recommendations |
| `frontend/css/styles.css` | All styling |
| `frontend/js/api.js` | API communication |
| `.env` | Configuration |

---

## ⚡ Key Features to Try

### 1. **Dashboard**
- View today's tasks
- Track study time with built-in timer
- See weekly statistics

### 2. **AI Planner**
- Get personalized daily schedule
- See priority subjects
- Get focus hours and break recommendations

### 3. **Task Manager**
- Add tasks with priority and estimated hours
- Mark tasks as complete
- Delete tasks you don't need

### 4. **Timetable**
- Create weekly schedules
- View in grid format
- Manage multiple timetables

### 5. **Analytics**
- Track hours studied
- See completion rates
- Subject-wise performance

### 6. **Settings**
- Update profile information
- Change study preferences
- Manage notifications

---

## 🎨 Customize Your App

### Change Colors
Edit `frontend/css/styles.css` (line ~13):
```css
--primary: #6366f1;    /* Change this color */
--secondary: #ec4899;
```

### Change School Name
Edit `frontend/index.html` and all pages to replace "AI Study Planner" with your name.

### Add Logo
Replace emoji (📚) with your logo in navbar across all pages.

---

## 📊 Test Data

### Add Sample Tasks
Open browser console and run:
```javascript
await API.createTask(
  "Math Chapter 5",
  "Mathematics",
  "Review and practice",
  "2025-12-20",
  "high",
  3
);
```

### Add Sample Timetable
```javascript
await API.createTimetable("My Schedule", [
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

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Can't connect to MongoDB | Run `mongod` in terminal |
| Port 5000 in use | Change PORT in `.env` |
| API calls failing | Check backend console for errors |
| Blank dashboard | Clear localStorage: `localStorage.clear()` |
| CORS errors | Verify backend is running |

---

## 📚 What's Next?

1. **Add more tasks** - The AI gets better with more data
2. **Create schedules** - Build a weekly timetable
3. **Track progress** - Use the dashboard timer daily
4. **Check analytics** - See your study patterns
5. **Customize settings** - Make it yours!

---

## 💡 Tips

✅ Add tasks with realistic estimated hours
✅ Set due dates so AI can prioritize
✅ Use high/medium/low priorities effectively
✅ Check AI Planner regularly for recommendations
✅ Use the timer on dashboard to track real study time

---

## 🎯 Next Steps

- [ ] Create 5+ tasks
- [ ] Generate AI study plan
- [ ] Create weekly timetable
- [ ] Start tracking with timer
- [ ] Review analytics after 1 week

---

**You're all set! Happy studying! 🎓📚**
