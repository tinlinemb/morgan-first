# Use the latest stable Node.js version (here using Node 18 on Alpine)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port used by the Node.js server
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]
