# EduLearn Deployment Guide

## Prerequisites
- GitHub repository
- Vercel account (Frontend)
- Render or Railway account (Backend)
- MongoDB Atlas account
- Cloudinary account
- Flutterwave account

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
```bash
cd client
npm run build
```

### Step 2: Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel
```

Or connect directly on Vercel dashboard:
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Set root directory to `client`
5. Deploy

### Step 3: Environment Variables
No special env variables needed for frontend (API URL is hardcoded).

---

## Backend Deployment (Render)

### Step 1: Prepare Backend
```bash
cd server
git push  # Make sure code is pushed
```

### Step 2: Create New Web Service on Render
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the repository
5. Fill in details:
   - **Name**: edulearn-api
   - **Root Directory**: server
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 3: Set Environment Variables
In Render dashboard, go to Environment:
```
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=generate_strong_random_secret
JWT_REFRESH_SECRET=generate_another_strong_random_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FLUTTERWAVE_PUBLIC_KEY=your_public_key
FLUTTERWAVE_SECRET_KEY=your_secret_key
SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=noreply@yourdomain.com
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Step 4: Deploy
Click "Create Web Service" - Render will automatically deploy

---

## Backend Deployment (Railway Alternative)

### Step 1: Go to Railway
1. https://railway.app
2. Click "New Project"
3. Deploy from GitHub

### Step 2: Configuration
Same as Render - add environment variables

---

## MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create account and cluster
3. Create database user
4. Get connection string:
```
mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority
```
5. Use this as `MONGODB_URI`

---

## Cloudinary Setup

1. Go to https://cloudinary.com
2. Sign up for free account
3. Go to Dashboard
4. Copy:
   - Cloud Name
   - API Key
   - API Secret

---

## Flutterwave Setup

1. Go to https://flutterwave.com
2. Create business account
3. Go to Dashboard → Settings → API Keys
4. Copy Public and Secret keys

---

## SendGrid Setup

1. Go to https://sendgrid.com
2. Create account
3. Create API Key
4. Copy and use as `SENDGRID_API_KEY`

---

## Domain Configuration

### Connect Custom Domain to Frontend (Vercel)
1. Vercel Dashboard → Your Project
2. Settings → Domains
3. Add custom domain
4. Update DNS records as shown

### Update Backend URL in Frontend
After deploying backend, update in `client/src/services/api.js`:
```javascript
const API = axios.create({
  baseURL: 'https://your-backend-domain.com/api',  // Update this
});
```

Redeploy frontend to Vercel.

---

## Testing Production

### Test Frontend
```
https://your-frontend-domain.vercel.app
```

### Test API
```bash
curl https://your-backend-domain.com/api/health
```

### Test Authentication
```bash
curl -X POST https://your-backend-domain.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

## Monitoring

### Vercel
- Dashboard shows deployments and analytics
- Check logs for errors

### Render/Railway
- Dashboard shows service status
- Check logs for errors

### MongoDB Atlas
- Check connection status
- Monitor cluster metrics

---

## Security Checklist

- ✅ All secrets in environment variables (never in code)
- ✅ JWT secrets are strong and random
- ✅ Database user has limited permissions
- ✅ CORS configured correctly
- ✅ HTTPS enabled (automatic on Vercel/Render)
- ✅ Rate limiting enabled
- ✅ Input validation on all endpoints
- ✅ No sensitive data in logs

---

## Troubleshooting

### Frontend won't connect to backend
- Check CORS is configured
- Check `API_URL` in `api.js` is correct
- Check backend is running

### Database connection fails
- Check `MONGODB_URI` format
- Check IP whitelist in MongoDB Atlas
- Check username/password are correct

### Authentication not working
- Check JWT secrets match
- Check tokens are being saved properly
- Check token format in headers

### Cloudinary uploads fail
- Check API credentials are correct
- Check image size limits
- Check file format is supported

---

## Scaling

### Add Payment Processing
Implement Flutterwave payment endpoints in backend

### Add More Features
- Video streaming
- Quiz system
- Certificate generation
- Email notifications
- Admin dashboard

### Performance Optimization
- Add caching
- Optimize database queries
- Use CDN for static files
- Enable compression

---

## Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update
```

### Backup Database
Set up MongoDB Atlas backups automatically

### Monitor Logs
Regularly check deployment logs for errors

### Security Updates
Subscribe to security advisories for dependencies

---

## Support

For deployment issues:
1. Check logs in dashboard
2. Review error messages
3. Test API endpoints
4. Verify environment variables
5. Create GitHub issue if stuck

---

## Production Checklist

Before going live:

- [ ] All environment variables set
- [ ] Database backed up
- [ ] API tested thoroughly
- [ ] Frontend tested on multiple devices
- [ ] SSL certificate active
- [ ] Monitoring set up
- [ ] Error logging configured
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] Security headers set
- [ ] Backups automated
- [ ] Support contact info added
