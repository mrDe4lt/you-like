import dotenv from 'dotenv';
dotenv.config();

export const config = {
  // Server
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'http://localhost:5000',

  // Database
  mongoUri: process.env.MONGODB_URI,
  dbName: process.env.DB_NAME || 'edulearn',

  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE || '7d',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpire: process.env.JWT_REFRESH_EXPIRE || '30d',

  // Cloudinary
  cloudinary: {
    name: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },

  // Flutterwave
  flutterwave: {
    publicKey: process.env.FLUTTERWAVE_PUBLIC_KEY,
    secretKey: process.env.FLUTTERWAVE_SECRET_KEY,
  },

  // Email
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
  },

  // CORS
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',

  // Admin
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,

  // Features
  enableEmailVerification: process.env.ENABLE_EMAIL_VERIFICATION === 'true',
  enableTwoFactorAuth: process.env.ENABLE_TWO_FACTOR_AUTH === 'true',
  enableLiveClasses: process.env.ENABLE_LIVE_CLASSES === 'true',
};

export default config;
