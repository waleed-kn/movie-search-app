# Vercel Deployment Checklist ✓

## Pre-Deployment Steps

### 1. Environment Variables Setup (CRITICAL)
- [ ] Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- [ ] Add **private** environment variable:
  - **Key**: `TMDB_API_KEY`
  - **Value**: Your TMDB API key (from https://www.themoviedb.org/settings/api)
  - **Environments**: Select "Production", "Preview", and "Development"

### 2. Files Created/Updated for Vercel ✓
- ✓ `.env.example` - Template for environment variables (NEVER commit secrets)
- ✓ `vercel.json` - Vercel deployment config with timeouts and cache headers
- ✓ `.vercelignore` - Build artifacts to skip during deployment
- ✓ `next.config.mjs` - Optimizations: compression, caching, minification
- ✓ `app/page.js` - Fixed to use private `TMDB_API_KEY`
- ✓ `app/movies/[id]/page.js` - Fixed to use private `TMDB_API_KEY`

### 3. Code Fixes Applied ✓
- ✓ Changed `process.env.NEXT_PUBLIC_TMDB_KEY` → `process.env.TMDB_API_KEY` (private)
- ✓ Added environment variable validation with error messages
- ✓ Added fetch timeouts (10s) for API calls
- ✓ Improved error handling with status codes
- ✓ Disabled source maps in production (performance)
- ✓ Optimized Next.js compilation

### 4. Deployment Steps
1. Ensure all changes are committed:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Import your GitHub repository
4. Select your Next.js project
5. **IMPORTANT**: In Environment Variables section, add:
   - `TMDB_API_KEY` with your actual API key
6. Click "Deploy"

### 5. Post-Deployment Testing
- [ ] Test homepage loads popular movies
- [ ] Test search functionality
- [ ] Test movie detail page with different IDs
- [ ] Check browser console for errors
- [ ] Monitor Vercel deployment logs for API errors

### 6. Troubleshooting
If you see "TMDB_API_KEY environment variable is not set":
- Add the environment variable in Vercel Dashboard
- Redeploy the project (Redeploy button)

If you see timeout errors:
- TMDB API might be slow - normal on first load
- Check .env variables are set correctly

## Files Structure
```
root/
├── .env.example (NEW) ✓
├── .vercelignore (NEW) ✓
├── vercel.json (NEW) ✓
├── next.config.mjs (UPDATED) ✓
├── app/
│   ├── page.js (UPDATED) ✓
│   └── movies/
│       └── [id]/page.js (UPDATED) ✓
└── package.json
```

## Important: Never Commit
- `.env.local` - Contains real API keys
- `node_modules/` - Added to .vercelignore
- `.next/` - Added to .vercelignore

---
**Ready for deployment!** 🚀
