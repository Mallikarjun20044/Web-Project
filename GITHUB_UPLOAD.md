# 🐙 GitHub & Vercel Upload Guide

Simple step-by-step instructions to get your AI Study Planner on GitHub and Vercel.

---

## 📋 Prerequisites (5 minutes)

### 1. Install Git
- **Windows:** https://git-scm.com/download/win
- **Mac:** `brew install git`
- **Linux:** `sudo apt-get install git`

Verify: `git --version`

### 2. Create Accounts
- **GitHub:** https://github.com/signup
- **Vercel:** https://vercel.com/signup (use GitHub to signup)
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas/register

---

## 🚀 Quick Steps (Copy & Paste)

### Open PowerShell and run:

```powershell
# Navigate to your project
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"

# Configure Git (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize repository
git init
git add .
git commit -m "Initial commit: AI Study Planner"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 📱 Step-by-Step (With Screenshots)

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `ai-study-planner`
   - **Description:** `AI-powered Study Planner for students`
   - **Visibility:** Public
3. **Do NOT** check "Initialize with README"
4. Click **Create repository**

### 2. Get Your Push URL

After creating the repo, you'll see a page with commands.

Copy the HTTPS URL (looks like):
```
https://github.com/YOUR_USERNAME/ai-study-planner.git
```

### 3. Push from Windows PowerShell

```powershell
# Open PowerShell in your project directory

cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Study Planner full-stack app"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git

# Rename branch to main
git branch -M main

# Push
git push -u origin main
```

**First push?** You may need to authenticate:
- GitHub will prompt you to sign in
- Or create a Personal Access Token: https://github.com/settings/tokens
- Token scopes: `repo`, `workflow`

### 4. Verify on GitHub

Visit: `https://github.com/YOUR_USERNAME/ai-study-planner`

You should see all your files! ✅

---

## ☁️ Vercel Deployment (5 minutes)

### 1. Setup MongoDB Atlas

**Create a database for production:**

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Build a Database"
3. Choose **M0 Free** tier
4. Create a database user:
   - Username: `admin`
   - Password: (generate strong one)
5. Click "Create User"
6. Click "Connect" → "Drivers"
7. Copy the connection string
8. **Replace:**
   - `PASSWORD` with your password
   - Add database name: `/ai-study-planner`

**Example:**
```
mongodb+srv://admin:YOURPASSWORD@cluster0.mongodb.net/ai-study-planner?retryWrites=true&w=majority
```

9. Go to "Security" → "Network Access"
10. Click "Add IP Address"
11. Choose "Allow from anywhere" (0.0.0.0/0)
12. Confirm

### 2. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Paste: `https://github.com/YOUR_USERNAME/ai-study-planner`
5. Click "Import"
6. Fill in settings:
   - **Project Name:** `ai-study-planner`
   - **Framework:** Select `Other`
   - **Root Directory:** `.`
7. Click "Continue"

### 3. Add Environment Variables

Click "+ Add Environment Variable" and add these:

**1. MONGODB_URI**
- Name: `MONGODB_URI`
- Value: Your MongoDB Atlas connection string
```
mongodb+srv://admin:PASSWORD@cluster0.mongodb.net/ai-study-planner?retryWrites=true&w=majority
```

**2. JWT_SECRET**
- Name: `JWT_SECRET`
- Value: `your-secret-key-at-least-32-chars-long-2024`

**3. NODE_ENV**
- Name: `NODE_ENV`
- Value: `production`

**4. CORS_ORIGIN**
- Name: `CORS_ORIGIN`
- Value: `https://ai-study-planner.vercel.app`

(You'll get the exact URL after deployment, update it then)

**5. PORT**
- Name: `PORT`
- Value: `3000`

### 4. Deploy

Click **"Deploy"** button

⏳ Wait 2-5 minutes for deployment to complete

### 5. Get Your Live URL

Once complete, you'll see your deployment URL:
```
https://ai-study-planner.vercel.app
```

✅ Your app is now live!

---

## 🔧 Update After Deployment

### Update .env file (local)

```env
APP_URL=https://ai-study-planner.vercel.app
```

### Update frontend/js/api.js

Find this line:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

Replace with:
```javascript
const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:5000/api'
  : 'https://ai-study-planner.vercel.app/api';
```

### Commit and push changes

```powershell
git add .
git commit -m "Update API endpoints for production"
git push origin main
```

Vercel will automatically redeploy! ✨

---

## ✅ Test Your Deployment

### Test API
Visit: https://ai-study-planner.vercel.app/api/health

Should return:
```json
{"message":"Server is running"}
```

### Test Frontend
Visit: https://ai-study-planner.vercel.app

Should load the landing page

### Create Account
1. Click "Get Started"
2. Create a test account
3. Verify it works

---

## 🐛 Troubleshooting

### Git push fails: "Repository not found"
- Verify you copied the correct GitHub URL
- Check your GitHub username
- Make sure repository is public

### Vercel deployment fails
- Check "Deployments" tab for error messages
- Verify all environment variables are set
- Check MongoDB Atlas IP whitelist (0.0.0.0/0)

### "Cannot connect to MongoDB"
- Verify MONGODB_URI is correct
- Check MongoDB Atlas IP whitelist
- Verify database user exists
- Test connection string locally first

### "CORS error" in browser
- Update CORS_ORIGIN to your Vercel URL
- Trigger a redeploy in Vercel

---

## 📝 Git Commands Reference

```powershell
# First time setup
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# After making changes
git add .
git commit -m "Your message here"
git push origin main

# Check status
git status

# View commits
git log

# Create new branch
git checkout -b feature-name
```

---

## 🎓 Next Steps

1. ✅ Push to GitHub
2. ✅ Deploy to Vercel
3. ✅ Test live application
4. ✅ Share with friends: `https://ai-study-planner.vercel.app`
5. 📚 Read: [DEPLOYMENT.md](./DEPLOYMENT.md) for advanced options

---

## 💡 Pro Tips

💡 Vercel auto-deploys when you push to main  
💡 Check Vercel logs if something breaks  
💡 Always test locally first  
💡 Use descriptive commit messages  
💡 Keep .env in .gitignore  

---

**Questions?** Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide!

