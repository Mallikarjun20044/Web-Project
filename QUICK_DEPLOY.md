# 🚀 DEPLOYMENT QUICK CARD

## Copy-Paste Commands for Deployment

### 1️⃣ Navigate to Project
```powershell
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"
```

### 2️⃣ Initialize Git (First Time Only)
```powershell
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial commit: AI Study Planner"
git branch -M main
```

### 3️⃣ Create GitHub Repository
Go to: https://github.com/new
- Name: `ai-study-planner`
- Public repository
- Don't initialize with README
- Click "Create repository"

### 4️⃣ Push to GitHub (Replace YOUR_USERNAME)
```powershell
git remote add origin https://github.com/YOUR_USERNAME/ai-study-planner.git
git push -u origin main
```

### 5️⃣ MongoDB Atlas Setup
- Go to: https://mongodb.com/cloud/atlas/register
- Create free cluster (M0)
- Create database user: admin / (secure password)
- Whitelist IP: 0.0.0.0/0 (Allow from anywhere)
- Get connection string:
```
mongodb+srv://admin:PASSWORD@cluster0.xxxxx.mongodb.net/ai-study-planner?retryWrites=true&w=majority
```

### 6️⃣ Deploy to Vercel
- Go to: https://vercel.com/dashboard
- Click "Add New..." → "Project"
- Import Git repository: ai-study-planner
- Add 5 environment variables:

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | `my-super-secret-jwt-key-change-this` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `CORS_ORIGIN` | `*` (update after deployment) |

- Click **Deploy**
- Wait 2-5 minutes
- **Done!** 🎉

### 7️⃣ After Deployment
- Copy your Vercel URL: `https://ai-study-planner-xxxxx.vercel.app`
- Update CORS_ORIGIN in Vercel to your URL
- Test: `https://your-url.vercel.app/api/health`

---

## 🔄 Update After Changes
```powershell
git add .
git commit -m "Description of changes"
git push origin main
```
Vercel will auto-deploy in 1-2 minutes!

---

## 🔐 Create GitHub Personal Access Token
If push fails due to authentication:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Check: `repo` and `workflow` scopes
4. Copy token (use as password when pushing)

---

## ✅ Verification Commands
```powershell
# Check Git status
git status

# Check remote
git remote -v

# View commit history
git log --oneline

# Test API locally
npm run dev
# Open: http://localhost:5000/api/health
```

---

## 📞 Quick Help

**Git not found**: Install from https://git-scm.com/download/win

**Authentication failed**: Use Personal Access Token instead of password

**MongoDB connection failed**: Check IP whitelist and connection string

**CORS error**: Update CORS_ORIGIN in Vercel to your deployment URL

**Build failed on Vercel**: Check deployment logs in Vercel dashboard

---

## 📁 Your Project Location
```
C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner
```

---

## 🎯 Success Checklist
- [ ] Git initialized
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas cluster created
- [ ] Vercel project deployed
- [ ] Environment variables added
- [ ] API health check works
- [ ] App loads successfully
- [ ] Can create account

---

**Need detailed instructions?** Open [DEPLOY_NOW.md](./DEPLOY_NOW.md)

**Questions?** Check [DEPLOYMENT.md](./DEPLOYMENT.md)

