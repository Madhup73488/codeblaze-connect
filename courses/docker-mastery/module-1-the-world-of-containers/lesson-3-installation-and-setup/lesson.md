---
title: "Lesson 3: Installation and Setup"
objective: "To install Docker Desktop on your operating system and run your first container."
video: "https://www.youtube.com/embed/17Bl31P_D-Q"
---

### Topics

- Installing Docker Desktop on Windows, macOS, and Linux.
- The Docker CLI: Interacting with the Docker Engine.
- Running your first container: docker run hello-world.
- Other essential commands: docker ps, docker images, docker pull.

### Example (Pulling and running an image)

```bash
# Pull the official Nginx image from Docker Hub
docker pull nginx

# Run the Nginx container in detached mode and map port 8080 to the container's port 80
docker run -d -p 8080:80 --name my-web-server nginx
```

### Practice Problem

Use the Docker CLI to pull the redis:alpine image from Docker Hub. Then, run a container from this image named my-redis. Finally, list all running containers to confirm it's active and then stop and remove it.
