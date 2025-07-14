---
title: "Lesson 2: Overview of Docker Swarm and Kubernetes"
objective: "To get a high-level introduction to the two most popular container orchestrators."
video: "https://www.youtube.com/embed/9zQmZ1J6_eU"
---

### Topics

- Docker Swarm: Docker's native, simpler orchestrator. Key concepts (services, tasks, nodes).
- Kubernetes (K8s): The industry standard, more powerful and complex orchestrator. Key concepts (Pods, Deployments, Services).
- When you might choose one over the other.

### Example (Docker Swarm service command)

```bash
# Create a service with 3 replicas of the nginx image
docker service create --name my-web-service --replicas 3 -p 8080:80 nginx
```

### Practice Problem

What is the fundamental unit of deployment in Kubernetes (the equivalent of a single container instance)?
