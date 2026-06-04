import jwt from 'jsonwebtoken';
import config from '../config/index.js';

export const generateAccessToken = (userId, role) => {
  return jwt.sign({ userId, role }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};

export const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, config.jwtRefreshSecret, {
    expiresIn: config.jwtRefreshExpire,
  });
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, config.jwtSecret);
  } catch (error) {
    throw new Error('Invalid access token');
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.jwtRefreshSecret);
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
};

export const generateTokens = (userId, role) => {
  return {
    accessToken: generateAccessToken(userId, role),
    refreshToken: generateRefreshToken(userId),
  };
};
