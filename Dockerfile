# Use a Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Next.js app and export it as static files
RUN npm run build

RUN npm run export

# Serve the static files with a lightweight web server
RUN npm install -g serve

# Use 'serve' to serve the static files from 'out/' directory
CMD ["serve", "out"]  # Serve the 'out' directory

# Expose port 5000 to the outside
EXPOSE 5000
