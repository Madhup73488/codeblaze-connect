---
title: "Lesson 1: Introduction to Dockerfiles"
objective: "To understand the purpose of a Dockerfile and its basic syntax."
video: "https://www.youtube.com/embed/gAkwW2tuIqE"
---

### Topics

- Dockerfile as a step-by-step recipe for building an image.
- Key instructions: FROM, RUN, COPY, CMD.
- The build context.

### Example (A simple Node.js Dockerfile)

```dockerfile
# Start from an official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run the application
CMD ["node", "index.js"]
```

### Practice Problem

What is the difference between the COPY and RUN instructions in a Dockerfile?
