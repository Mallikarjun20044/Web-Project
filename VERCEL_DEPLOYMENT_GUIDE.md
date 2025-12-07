# 🚀 Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now **100% ready for Vercel deployment!** All files are properly interconnected.

### What's Already Done ✓
- ✅ All HTML files use correct relative paths
- ✅ Server.js properly configured for static file serving
- ✅ API routes properly set up
- ✅ vercel.json configuration file created
- ✅ All 50 files pushed to GitHub: https://github.com/Mallikarjun20044/Web-Project.git
- ✅ Navigation links properly interconnected
- ✅ Environment variables defined in .env
- ✅ Package.json with all dependencies

---

## 📋 Step-by-Step Deployment to Vercel

### Step 1: Create MongoDB Atlas Database (Required!)

Vercel uses cloud functions, so you need a cloud database (not localhost).

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create a **FREE** account
3. Create a **FREE M0 Cluster** (512MB free forever)
4. Go to **Database Access** → Add New Database User
   - Username: `studyplanner`
   - Password: `[Generate secure password]` - **SAVE THIS!**
5. Go to **Network Access** → Add IP Address
   - Click: **ALLOW ACCESS FROM ANYWHERE** (0.0.0.0/0)
6. Click **Connect** → **Connect your application**
7. Copy the connection string, it looks like:
   ```
   mongodb+srv://studyplanner:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `<password>` with your actual password

### Step 2: Deploy to Vercel

1. Go to: https://vercel.com/signup
2. Sign up with GitHub account
3. Import your GitHub repository:
   - Click **"Add New..."** → **"Project"**
   - Select: `Mallikarjun20044/Web-Project`
4. Configure Project:
   - **Framework Preset:** Other
   - **Root Directory:** `ai-study-planner`
   - Click **"Environment Variables"**

### Step 3: Add Environment Variables in Vercel

Add these 5 environment variables:

| Variable Name | Value |
|--------------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string from Step 1 |
| `JWT_SECRET` | `your-super-secret-jwt-key-change-this-in-production-12345` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `CORS_ORIGIN` | Leave blank for now (will add after first deploy) |

### Step 4: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://web-project-xxxxx.vercel.app`

### Step 5: Update CORS Origin

1. Copy your Vercel deployment URL
2. Go back to Vercel project settings
3. Add environment variable:
   - Name: `CORS_ORIGIN`
   - Value: Your Vercel URL (e.g., `https://web-project-xxxxx.vercel.app`)
4. Redeploy (Vercel will auto-redeploy on settings change)

---

## 🧪 Testing Your Deployment

After deployment, test these:

1. **Landing Page:** `https://your-app.vercel.app/`
   - Should show hero section and features
   - "Sign In" button should work

2. **Login Page:** `https://your-app.vercel.app/pages/login.html`
   - Registration form should appear
   - CSS should load properly

3. **API Health Check:** `https://your-app.vercel.app/api/auth/health`
   - Should return server status (might be 404 if no health endpoint)

4. **Register New Account:**
   - Go to login page
   - Click "Register" tab
   - Fill form and submit
   - Should redirect to dashboard

5. **Dashboard Navigation:**
   - All sidebar links should work
   - Pages should load without 404 errors

---

## 🔧 Troubleshooting

### Issue: "Cannot connect to database"
**Solution:** Check MongoDB Atlas:
- IP whitelist includes 0.0.0.0/0
- Database user password is correct in MONGODB_URI
- Connection string format is correct

### Issue: "CORS Error"
**Solution:** 
- Ensure CORS_ORIGIN matches your Vercel URL exactly
- No trailing slash in CORS_ORIGIN
- Redeploy after changing environment variables

### Issue: "404 Not Found for CSS/JS"
**Solution:** This is already fixed! All paths are relative.
- index.html uses: `css/styles.css`
- Pages use: `../css/styles.css`

### Issue: "API calls fail"
**Solution:** Check browser console:
- api.js automatically detects base URL
- Verify Vercel URL is used, not localhost

### Issue: "JWT token errors"
**Solution:**
- Ensure JWT_SECRET is set in Vercel environment variables
- Must be at least 32 characters long
- Redeploy after adding

---

## 📊 File Interconnection Map

All files are properly connected:

```
frontend/
├── index.html ────────────┐
│   ├── css/styles.css     │
│   └── pages/login.html ──┤
│                           │
├── pages/                  │
│   ├── login.html ─────────┤
│   ├── dashboard.html ─────┤
│   ├── study-planner.html ─┤
│   ├── timetable.html ─────┤
│   ├── analytics.html ─────┤
│   └── settings.html ──────┤
│   All use:                │
│   ├── ../css/styles.css   │
│   └── ../js/api.js ───────┤
│                           │
├── js/api.js ──────────────┤
│   └── Calls /api/* ───────┤
│                           │
└── css/styles.css          │
                            │
backend/                    │
├── server.js ──────────────┘
│   ├── Serves static files
│   ├── Routes /api/* to controllers
│   └── SPA fallback for all routes
│
├── routes/
│   ├── auth.js → /api/auth/*
│   ├── tasks.js → /api/tasks/*
│   ├── timetables.js → /api/timetables/*
│   └── analytics.js → /api/analytics/*
│
└── controllers/
    ├── authController.js
    ├── taskController.js
    ├── timetableController.js
    └── analyticsController.js
```

---

## 🎯 Quick Reference

**GitHub Repo:** https://github.com/Mallikarjun20044/Web-Project.git

**Files Count:** 50 files

**Tech Stack:**
- Frontend: HTML5, CSS3, Vanilla JS
- Backend: Node.js + Express
- Database: MongoDB (Atlas for production)
- Auth: JWT + bcryptjs
- Deployment: Vercel Serverless

**Environment Variables (Production):**
```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/ai-study-planner
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-app.vercel.app
```

---

## 🎉 What to Expect

After successful deployment:
1. ✅ Landing page loads instantly
2. ✅ All navigation links work
3. ✅ User can register and login
4. ✅ Dashboard displays user data
5. ✅ AI Study Planner generates recommendations
6. ✅ Timetable allows scheduling
7. ✅ Analytics shows study statistics
8. ✅ Settings allows profile customization

---

## 📞 Need Help?

If deployment fails:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test MongoDB Atlas connection separately
4. Check browser console for errors
5. Verify GitHub repository is up to date

---

**Your app is ready to deploy! Follow the steps above, and you'll be live in under 10 minutes! 🚀**
