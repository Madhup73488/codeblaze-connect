---
title: "Lesson 1: Docker Networking Deep Dive"
objective: "To understand the different types of Docker networks and how to manage them."
video: "https://www.youtube.com/embed/bKx9kL2m29w"
---

### Topics

- The default networks: bridge, host, and none.
- Creating and managing user-defined bridge networks.
- Manually connecting containers to networks.

### Example (Creating a custom network)

```bash
# Create a new bridge network
docker network create my-app-net

# Run containers and attach them to the network
docker run -d --name my-db --network my-app-net postgres
docker run -d --name my-app --network my-app-net my-app-image
```

### Practice Problem

What is the main advantage of using a user-defined bridge network over the default bridge network for a multi-container application?
