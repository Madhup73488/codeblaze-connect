---
title: "Lesson 2: Optimizing Images and Build Caching"
objective: "To learn techniques for creating smaller, more efficient Docker images and speeding up the build process."
video: "https://www.youtube.com/embed/LE3s_T0V-ec"
---

### Topics

- Understanding layer caching.
- Ordering Dockerfile instructions to maximize cache usage.
- The .dockerignore file.
- Multi-stage builds for smaller production images.

### Example (A multi-stage build for a Go application)

```dockerfile
# Stage 1: Build the application
FROM golang:1.19 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp .

# Stage 2: Create the final, small image
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/myapp .
CMD ["./myapp"]
```

### Practice Problem

Explain why copying package.json and running npm install before copying the rest of your source code is a critical optimization for Node.js applications.
