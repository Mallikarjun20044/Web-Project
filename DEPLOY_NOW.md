# 🚀 QUICK DEPLOY GUIDE - GitHub to Vercel in 10 Minutes

## 📋 Prerequisites (2 minutes)

✅ **Install Git**: https://git-scm.com/download/win  
✅ **Create GitHub Account**: https://github.com/signup  
✅ **Create Vercel Account**: https://vercel.com/signup (use GitHub login)  
✅ **Create MongoDB Atlas Account**: https://mongodb.com/cloud/atlas/register  

---

## 🎯 PART 1: Upload to GitHub (5 minutes)

### Option A: Using the Automated Script (EASIEST)

1. **Open PowerShell in your project folder**
   ```powershell
   cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"
   ```

2. **Run the helper script**
   ```powershell
   .\git-init.bat
   ```
   - Enter your GitHub username and email when prompted
   - Script will initialize Git and create initial commit

3. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `ai-study-planner`
   - Description: `AI-powered Study Planner for students`
   - Visibility: **Public**
   - **DO NOT** check "Initialize with README"
   - Click **Create repository**

4. **Push to GitHub**
   ```powershell
   # Replace YOUR_USERNAME with your actual GitHub username
   git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git
   git push -u origin main
   ```

### Option B: Manual Commands

```powershell
# Navigate to project
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"

# Initialize Git
git init

# Configure Git (replace with your info)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Study Planner"

# Set main branch
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git

# Push to GitHub
git push -u origin main
```

### 🔐 GitHub Authentication

**First time pushing?** You'll need authentication:

1. **Create Personal Access Token**:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: `AI Study Planner Deploy`
   - Scopes: Check `repo` and `workflow`
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **When prompted for password**: Paste your Personal Access Token

---

## ☁️ PART 2: Setup MongoDB Atlas (3 minutes)

**Why?** Vercel cannot use local MongoDB. You need a cloud database.

### Step 1: Create Database

1. Go to https://mongodb.com/cloud/atlas
2. Sign up (free tier available)
3. Create a new project: `AI Study Planner`

### Step 2: Create Cluster

1. Click **"Build a Database"**
2. Choose **FREE** tier (M0)
3. Select closest region (e.g., AWS / N. Virginia)
4. Cluster Name: `Cluster0` (default is fine)
5. Click **"Create"** (takes 3-5 minutes)

### Step 3: Create Database User

1. Go to **Security** → **Database Access**
2. Click **"Add New Database User"**
3. **Username**: `admin`
4. **Password**: Click "Autogenerate Secure Password" → **SAVE THIS PASSWORD!**
5. **Database User Privileges**: Atlas admin
6. Click **"Add User"**

### Step 4: Whitelist All IPs (for Vercel)

1. Go to **Security** → **Network Access**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

⚠️ **Important**: For production, you should whitelist only Vercel's IP ranges (see Vercel docs)

### Step 5: Get Connection String

1. Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Driver: **Node.js**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace `<password>`** with your actual password
6. **Add database name** at the end: `/ai-study-planner`

**Final format**:
```
mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/ai-study-planner?retryWrites=true&w=majority
```

**SAVE THIS STRING!** You'll need it for Vercel.

---

## 🚀 PART 3: Deploy to Vercel (2 minutes)

### Step 1: Import Project

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. **Select your repository**: `ai-study-planner`
   - If you don't see it, click "Adjust GitHub App Permissions"
5. Click **"Import"**

### Step 2: Configure Project

**Framework Preset**: Other (or leave as detected)  
**Root Directory**: `.` (leave as is)  
**Build Command**: Leave empty or `npm install`  
**Output Directory**: Leave empty  
**Install Command**: `npm install`  

### Step 3: Add Environment Variables

Click **"Environment Variables"** section and add these:

#### 1. MONGODB_URI
```
mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/ai-study-planner?retryWrites=true&w=majority
```
*(Paste your MongoDB Atlas connection string)*

#### 2. JWT_SECRET
```
my-super-secret-jwt-key-2024-change-this-to-something-secure
```
*(Use any random string, min 32 characters)*

#### 3. NODE_ENV
```
production
```

#### 4. PORT
```
3000
```

#### 5. CORS_ORIGIN
```
*
```
*(You'll update this to your Vercel URL after deployment)*

### Step 4: Deploy!

1. Click **"Deploy"** button
2. Wait 2-5 minutes for build
3. **Done!** You'll see your live URL

---

## ✅ PART 4: Post-Deployment (2 minutes)

### Update CORS Origin

1. After deployment, copy your Vercel URL (e.g., `https://ai-study-planner.vercel.app`)
2. Go to Vercel → Project Settings → Environment Variables
3. Edit **CORS_ORIGIN** variable
4. Change from `*` to your Vercel URL: `https://your-project.vercel.app`
5. Click "Redeploy" to apply changes

### Test Your Deployment

1. Visit your Vercel URL
2. Test API health: `https://your-project.vercel.app/api/health`
   - Should return: `{"message":"Server is running"}`
3. Open the app: `https://your-project.vercel.app`
4. Create a test account
5. Verify all features work

---

## 🔄 Making Updates After Deployment

Vercel automatically redeploys when you push to GitHub:

```powershell
# After making changes
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will auto-deploy in 1-2 minutes!

---

## 📝 Quick Command Reference

### Git Commands
```powershell
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### NPM Commands
```powershell
# Install dependencies
npm install

# Start development
npm run dev

# Start production
npm start
```

---

## ❓ Troubleshooting

### "Git not found"
→ Install Git: https://git-scm.com/download/win

### "Authentication failed"
→ Use Personal Access Token instead of password

### "MongoDB connection failed" on Vercel
→ Check:
- MongoDB Atlas IP whitelist (0.0.0.0/0)
- Connection string is correct in Vercel env variables
- Database user exists
- Password has no special characters (or is URL-encoded)

### "CORS error" in browser
→ Update CORS_ORIGIN in Vercel to your deployment URL

### "Cannot find module" on Vercel
→ Make sure package.json has all dependencies listed

### Changes not reflected after push
→ Check Vercel dashboard → Deployments → View build logs

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] IP whitelist set (0.0.0.0/0)
- [ ] Vercel project created
- [ ] 5 environment variables added
- [ ] Deployment successful
- [ ] API health check works
- [ ] Frontend loads correctly
- [ ] Can create account and login
- [ ] All features working

---

## 📚 Additional Resources

- **GitHub Docs**: https://docs.github.com/en/get-started
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/
- **Project README**: [README.md](./README.md)
- **Detailed Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Path Fixes**: [PATH_FIX_GUIDE.md](./PATH_FIX_GUIDE.md)

---

## 🆘 Need Help?

1. Check deployment logs in Vercel dashboard
2. Check MongoDB Atlas logs
3. Open browser console (F12) for frontend errors
4. Review [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting

---

**Your Deployment URL**: `https://ai-study-planner-xxxxx.vercel.app`

**Share it with friends and start studying smarter! 📚✨**

