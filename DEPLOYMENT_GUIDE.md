# 🚀 Vercel Deployment Guide

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Copy the repository URL
3. Run these commands in your terminal:

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Step 3: Configure Environment Variables (if needed)

If you're using EmailJS, add these environment variables in Vercel:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel --prod
```

Follow the prompts:

- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **mahi-portfolio** (or your preferred name)
- Directory? **./** (current directory)

## Method 3: Drag & Drop Deployment

### Step 1: Build the project

```bash
npm run build
```

### Step 2: Deploy

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the entire project folder to the Vercel dashboard
3. Wait for deployment to complete

## 🎉 Post-Deployment

After successful deployment, you'll get:

- **Live URL**: Your portfolio will be accessible at `https://your-project-name.vercel.app`
- **Automatic HTTPS**: Vercel provides SSL certificates automatically
- **Global CDN**: Your site will be served from edge locations worldwide
- **Automatic Deployments**: Future pushes to main branch will auto-deploy

## 🔧 Custom Domain (Optional)

To use a custom domain:

1. Go to your project dashboard on Vercel
2. Click "Domains" tab
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## 📊 Performance Optimization

Your portfolio is already optimized with:

- ✅ Next.js Image optimization
- ✅ Code splitting and lazy loading
- ✅ Minified CSS and JavaScript
- ✅ GZIP compression
- ✅ Static generation where possible

## 🐛 Troubleshooting

### Build Errors

- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Next.js configuration

### Runtime Errors

- Check browser console for JavaScript errors
- Verify API endpoints and external services
- Test locally with `npm run build && npm start`

### Performance Issues

- Use Vercel Analytics to monitor performance
- Optimize images and reduce bundle size
- Enable caching for static assets

## 📞 Support

If you encounter issues:

1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review build logs in Vercel dashboard
3. Test deployment locally first

---

**Your portfolio is ready for deployment! 🚀**
