# 🚀 Deployment Guide - GitHub & Vercel

Complete guide to upload your AI Study Planner to GitHub and deploy to Vercel.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Upload](#github-upload)
3. [Vercel Deployment](#vercel-deployment)
4. [Configuration](#configuration)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

✅ **Required Tools:**
- Git installed: https://git-scm.com/
- GitHub account: https://github.com
- Vercel account: https://vercel.com (signup free)
- Node.js 18.x or higher
- MongoDB Atlas account: https://www.mongodb.com/cloud/atlas (free tier available)

✅ **Check Installations:**
```bash
git --version
node --version
npm --version
```

---

## Part 1: GitHub Upload

### Step 1: Initialize Git in Your Local Project

```bash
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
```

### Step 2: Create .gitignore (Already Created)

Your `.gitignore` file already exists. Verify it contains:
```
node_modules/
.env
.DS_Store
*.log
```

### Step 3: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new
2. **Fill in:**
   - Repository name: `ai-study-planner`
   - Description: `AI-powered Study Planner - Smart scheduling for students`
   - Choose: **Public** (for easier Vercel deployment)
   - **DO NOT** initialize with README (you have one)
3. **Click:** "Create repository"

### Step 4: Add and Commit Files

```bash
git add .
git commit -m "Initial commit: AI Study Planner full stack application"
```

### Step 5: Push to GitHub

Replace `your-username` and `token` in the URL:

```bash
git remote add origin https://github.com/your-username/ai-study-planner.git
git branch -M main
git push -u origin main
```

**First time pushing?** You'll be asked for authentication:
- Use Personal Access Token (recommended)
- Create one at: https://github.com/settings/tokens
- Scopes needed: `repo`, `workflow`

### Step 6: Verify on GitHub

Visit `https://github.com/your-username/ai-study-planner`  
You should see all your files uploaded ✅

---

## Part 2: MongoDB Atlas Setup (Required for Vercel)

Vercel cannot use local MongoDB. You must use MongoDB Atlas cloud.

### Step 1: Create MongoDB Atlas Account

1. **Go to:** https://www.mongodb.com/cloud/atlas
2. **Sign up** (free tier available)
3. **Create a new project:** Name it "AI Study Planner"

### Step 2: Create a Cluster

1. **Click:** "Build a Database"
2. **Choose:** Free tier (M0)
3. **Select Region:** Closest to your location
4. **Click:** "Create Cluster"
5. **Wait:** 5-10 minutes for setup

### Step 3: Create Database User

1. **Go to:** Security → Database Access
2. **Click:** "Add New Database User"
3. **Enter:**
   - Username: `admin`
   - Password: Generate secure password (save it!)
   - Built-in Role: "Atlas Admin"
4. **Click:** "Add User"

### Step 4: Get Connection String

1. **Go to:** Deployment → Databases
2. **Click:** "Connect" on your cluster
3. **Choose:** "Drivers"
4. **Copy** the connection string (looks like):
   ```
   mongodb+srv://admin:PASSWORD@cluster.mongodb.net/ai-study-planner?retryWrites=true&w=majority
   ```
5. **Replace:**
   - `PASSWORD` with your password
   - Keep `ai-study-planner` as database name

### Step 5: Whitelist IP (Vercel)

1. **Go to:** Security → Network Access
2. **Click:** "Add IP Address"
3. **Select:** "Allow access from anywhere" (0.0.0.0/0)
4. **Click:** "Confirm"

⚠️ **Note:** For production, whitelist only Vercel's IP ranges (found in Vercel docs)

---

## Part 3: Vercel Deployment

### Step 1: Connect Vercel to GitHub

1. **Go to:** https://vercel.com
2. **Sign up/Login** with GitHub
3. **Authorize** Vercel to access your GitHub

### Step 2: Import Project

1. **Click:** "Add New..." → "Project"
2. **Select:** "Import Git Repository"
3. **Paste:** `https://github.com/your-username/ai-study-planner`
4. **Click:** "Import"

### Step 3: Configure Project

**Project Name:** `ai-study-planner`

**Root Directory:** Leave as `.` (root)

**Framework:** Select `Other` (no framework)

**Build Command:** (Leave empty or use)
```
npm run build
```

**Output Directory:** Leave empty

**Install Command:** 
```
npm install
```

**Click:** "Continue"

### Step 4: Add Environment Variables

**Add these one by one:**

1. **MONGODB_URI**
   ```
   mongodb+srv://admin:YOUR_PASSWORD@cluster.mongodb.net/ai-study-planner?retryWrites=true&w=majority
   ```

2. **JWT_SECRET**
   ```
   your-super-secret-key-min-32-characters-long-2024
   ```

3. **NODE_ENV**
   ```
   production
   ```

4. **CORS_ORIGIN**
   ```
   https://your-project.vercel.app
   ```

5. **PORT**
   ```
   3000
   ```

**Click:** "Deploy" ✅

### Step 5: Wait for Deployment

- Vercel will build and deploy your app
- Takes 2-5 minutes
- Watch the logs in real-time
- Once complete, you'll get a deployment URL

---

## Part 4: Update Project References

After deployment, update these files:

### Update vercel.json

Replace with your actual environment variable names if different:
```json
"env": {
  "MONGODB_URI": "@mongodb_uri",
  "JWT_SECRET": "@jwt_secret",
  "NODE_ENV": "production",
  "CORS_ORIGIN": "@cors_origin"
}
```

### Update frontend/js/api.js

Find this line:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

Replace with:
```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-project.vercel.app/api'
  : 'http://localhost:5000/api';
```

---

## Part 5: Verify Deployment

### Test Live URL

1. **Get your Vercel URL** from Vercel dashboard
   - Format: `https://your-project.vercel.app`

2. **Test endpoints:**
   ```
   https://your-project.vercel.app/api/health
   ```
   Should return: `{"message":"Server is running"}`

3. **Test frontend:**
   ```
   https://your-project.vercel.app
   ```
   Should load the landing page

---

## Configuration Reference

### Environment Variables

| Variable | Local Development | Production (Vercel) |
|----------|------------------|-------------------|
| MONGODB_URI | `mongodb://localhost:27017/ai-study-planner` | MongoDB Atlas connection string |
| JWT_SECRET | Any string | Strong 32+ char string |
| NODE_ENV | `development` | `production` |
| CORS_ORIGIN | `http://localhost:5000` | Your Vercel URL |
| PORT | `5000` | `3000` (Vercel default) |

### vercel.json Explanation

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "backend/server.js"
    }
  ]
}
```

- Routes all `/api/*` requests to backend
- Routes all other requests to backend (for SPA)
- Backend handles serving frontend static files

---

## Troubleshooting

### Issue: "Cannot find module 'mongodb'"

**Solution:**
```bash
npm install
npm install mongoose@latest
```

### Issue: "MongoNetworkError" on Vercel

**Check:**
1. MongoDB Atlas IP whitelist (set to 0.0.0.0/0)
2. MONGODB_URI contains correct password
3. Database user exists in MongoDB Atlas

### Issue: "CORS Error" in browser

**Check:**
1. CORS_ORIGIN environment variable is set
2. Value is your Vercel URL: `https://your-project.vercel.app`
3. Restart deployment after changing

### Issue: Frontend shows 404 errors

**Check:**
1. Static files are in `frontend/` directory
2. `vercel.json` routes are correct
3. Frontend CSS and JS paths are relative

### Issue: Database connection times out

**Solution:** Increase MongoDB Atlas timeout
1. Go to MongoDB Atlas
2. Cluster Settings
3. Increase "Connection Pool Size" to 200

---

## Redeploy After Changes

### Using Git (Automatic)

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel automatically redeploys on push to main!

### Using Vercel Dashboard (Manual)

1. Go to https://vercel.com/dashboard
2. Click your project
3. Click "Redeploy" button

---

## Best Practices

✅ **Always use environment variables** for sensitive data  
✅ **Never commit .env file** to GitHub  
✅ **Test locally first** before pushing  
✅ **Use descriptive commit messages**  
✅ **Monitor Vercel logs** for errors  
✅ **Set up monitoring** for production  

---

## Quick Troubleshooting Checklist

- [ ] Git initialized and files committed
- [ ] GitHub repository created and pushed
- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] IP whitelist set to 0.0.0.0/0
- [ ] Vercel project imported from GitHub
- [ ] All 5 environment variables added
- [ ] Deployment completed successfully
- [ ] Frontend loads without errors
- [ ] API health check responds

---

## Useful Links

- **GitHub Docs:** https://docs.github.com/en
- **Vercel Docs:** https://vercel.com/docs
- **MongoDB Atlas:** https://docs.atlas.mongodb.com/
- **Express.js Guides:** https://expressjs.com/
- **Mongoose Docs:** https://mongoosejs.com/

---

## Support & Next Steps

**Having issues?** Check:
1. Vercel deployment logs (in dashboard)
2. MongoDB Atlas logs
3. Browser console for errors
4. This guide's troubleshooting section

**Want to customize?** See:
- `README.md` - Full documentation
- `FEATURES.md` - All features explained
- `QUICK_REFERENCE.md` - Quick lookup guide

**Ready to scale?** Consider:
- Adding authentication improvements
- Implementing email notifications
- Adding more AI features
- Database optimization
- CDN for static files

---

**🎉 Congratulations! Your app is now live on Vercel!**

Visit: `https://your-project.vercel.app`

