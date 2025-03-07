# Use a Node.js base image
FROM node:22.3.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app and export it as static files
RUN npm run export

# Serve the static files with a lightweight web server
# Use Nginx or any other simple HTTP server
RUN npm install -g serve
CMD ["serve", "out"]

# Expose port 5000 to the outside
EXPOSE 5000
