# 🚀 Quick Start Guide

## 5-Minute Setup

### 1. Install Node.js (One-time setup)

If you don't have Node.js installed:
1. Download from [nodejs.org](https://nodejs.org) (LTS version 18+)
2. Run the installer
3. Verify: Open PowerShell and type `node --version`

### 2. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

**Wait for it to complete** (usually 2-3 minutes)

### 3. Start Development Server

```powershell
npm run dev
```

You'll see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 4. Open in Browser

Click: **http://localhost:3000**

## 🎯 What You Get

✅ Portfolio website with:
- Professional profile section
- Skills showcase
- Work experience timeline
- Interactive projects
- Code examples
- Contact form

## 🛑 To Stop the Server

Press: `Ctrl + C` in PowerShell

## 🔄 During Development

The page auto-reloads when you save changes to component files.

## 📝 To Edit Content

Edit files in the `components/` folder:
- `Hero.tsx` - Profile section
- `Skills.tsx` - Your skills
- `Experience.tsx` - Work history
- `Projects.tsx` - Your projects
- `Contact.tsx` - Contact information

## 🚀 Build for Production

```powershell
npm run build
npm start
```

## 📦 Deploy

### Vercel (Free, Recommended)
```powershell
npm i -g vercel
vercel
```

### Netlify (Free)
```powershell
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

## ⚡ Common Issues

**"npm is not recognized"**
- Restart PowerShell after installing Node.js

**"Port 3000 already in use"**
```powershell
npm run dev -- -p 3001
```

**"Can't find module"**
```powershell
rm -r node_modules
npm install
```

## 📚 Learn More

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

**Questions? Check SETUP_GUIDE.md for detailed instructions.**
