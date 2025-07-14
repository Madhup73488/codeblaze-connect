---
title: "Lesson 2: Security Best Practices"
objective: "To learn how to build and run more secure Docker containers."
video: "https://www.youtube.com/embed/g2nDL30C3go"
---

### Topics

- Running as a non-root user inside containers.
- Using minimal base images (like alpine).
- Scanning images for vulnerabilities (e.g., with Docker Scout or Snyk).
- Managing secrets securely (Docker Secrets, environment variables).

### Example (Creating a non-root user in a Dockerfile)

```dockerfile
FROM alpine:latest
# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Switch to the non-root user
USER appuser
WORKDIR /home/appuser
COPY . .
CMD ["./myapp"]
```

### Practice Problem

Why is it considered a security risk to run containers as the root user by default?
