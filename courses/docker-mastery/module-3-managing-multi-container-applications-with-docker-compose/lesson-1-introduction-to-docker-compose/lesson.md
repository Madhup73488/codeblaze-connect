---
title: "Lesson 1: Introduction to Docker Compose"
objective: "To understand the role of Docker Compose in local development and define a simple service."
video: "https://www.youtube.com/embed/p3_fnE_in4s"
---

### Topics

- The docker-compose.yml file.
- Defining services, images, ports, and environment variables.
- The docker-compose up and docker-compose down commands.

### Example (A simple docker-compose.yml)

```yaml
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
```

### Practice Problem

Write a docker-compose.yml file to run a single Redis container, mapping its default port 6379 to the same port on your host machine.
