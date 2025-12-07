# 🚀 Upload to Your GitHub Repository

## Your Repository
```
https://github.com/Mallikarjun20044/Web-Project.git
```

---

## ⚡ Quick Upload (Recommended)

### Run the automated script:
```powershell
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"
.\push-to-github.bat
```

The script will:
1. Initialize Git (if needed)
2. Add all files
3. Create commit
4. Push to your GitHub repository
5. Done! ✅

---

## 🔐 Authentication

When prompted for credentials:

**Username**: `Mallikarjun20044`

**Password**: Use a **Personal Access Token** (not your GitHub password)

### Create Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name: `Web Project Deploy`
4. Select scopes: ✅ `repo` and ✅ `workflow`
5. Click **"Generate token"**
6. **Copy the token** (save it somewhere safe!)
7. Use this token as your password when pushing

---

## 📝 Manual Commands (Alternative)

If you prefer manual commands:

```powershell
cd "C:\Users\Mallikarjun\OneDrive\Desktop\web project\ai-study-planner"

# Initialize Git
git init

# Configure
git config user.name "Mallikarjun20044"
git config user.email "your.email@example.com"

# Add files
git add .

# Commit
git commit -m "AI Study Planner - Full Stack Application"

# Set branch
git branch -M main

# Add remote
git remote add origin https://github.com/Mallikarjun20044/Web-Project.git

# Push
git push -u origin main
```

---

## ✅ Verify Upload

After pushing, check your repository:

**Visit**: https://github.com/Mallikarjun20044/Web-Project

You should see:
- ✅ All frontend files
- ✅ All backend files
- ✅ README.md
- ✅ Documentation files
- ✅ Configuration files

---

## 🚀 Deploy to Vercel (Next Step)

After uploading to GitHub:

1. **Go to**: https://vercel.com/dashboard
2. **Click**: "Add New..." → "Project"
3. **Select**: "Import Git Repository"
4. **Choose**: `Web-Project` repository
5. **Add Environment Variables**:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - Random secret string
   - `NODE_ENV` - `production`
   - `PORT` - `3000`
   - `CORS_ORIGIN` - `*` (update after deployment)
6. **Click**: Deploy

**Deployment takes 2-5 minutes**

---

## 🔄 Update After Changes

When you make changes:

```powershell
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will auto-deploy your changes!

---

## 🆘 Troubleshooting

### "Authentication failed"
→ Use Personal Access Token, not password
→ Create at: https://github.com/settings/tokens

### "Permission denied"
→ Make sure you have push access to the repository
→ Check you're using correct username: `Mallikarjun20044`

### "Remote already exists"
→ Remove it first: `git remote remove origin`
→ Then add again: `git remote add origin https://github.com/Mallikarjun20044/Web-Project.git`

### "Nothing to commit"
→ This is normal if you've already committed
→ Just run: `git push -u origin main`

---

## 📞 Quick Help

**Check if Git is initialized**:
```powershell
git status
```

**Check remote repository**:
```powershell
git remote -v
```

**View commit history**:
```powershell
git log --oneline
```

**Force push (if needed)**:
```powershell
git push -u origin main --force
```

---

## ✨ After Successful Upload

Your repository will contain:
- Complete AI Study Planner application
- Frontend (HTML, CSS, JavaScript)
- Backend (Node.js, Express)
- All documentation
- Ready for Vercel deployment!

**Repository URL**: https://github.com/Mallikarjun20044/Web-Project

---

## 🎯 Next Steps

1. ✅ Run `push-to-github.bat`
2. ✅ Verify on GitHub
3. ✅ Deploy to Vercel (see DEPLOY_NOW.md)
4. ✅ Test your live app
5. ✅ Share with others!

---

**Ready? Run the script now!**

```powershell
.\push-to-github.bat
```

