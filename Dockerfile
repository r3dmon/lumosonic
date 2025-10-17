# Use Node.js 20 as the base image (same as Cloudflare Pages)
FROM node:20-slim

# Install curl and other required packages
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Set working directory
WORKDIR /app

# Copy package files (bun.lockb will be created during install)
COPY frontend/package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application
RUN cd frontend && bun run build

# Install serve to run the built application
RUN bun add -g serve

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "frontend/dist", "-l", "3000"] 