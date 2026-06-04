# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app/server

# Copy package files
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy server code
COPY server/ .

# Expose port
EXPOSE 5000

# Set environment
ENV NODE_ENV=development

# Start server
CMD ["npm", "run", "dev"]
