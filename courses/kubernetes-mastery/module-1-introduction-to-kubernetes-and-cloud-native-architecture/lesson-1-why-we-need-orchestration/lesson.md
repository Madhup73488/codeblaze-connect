---
title: "Lesson 1: Why We Need Orchestration"
objective: "Understand the challenges of running containers at scale and the role of an orchestrator."
video: "https://www.youtube.com/embed/kBF6BvWkFpY"
---

### Topics

- Recap: The limitations of running containers manually.
- Key challenges: Scaling, service discovery, load balancing, self-healing, zero-downtime deployments.
- What an orchestrator provides.

### Example (Concept)

If a container running your web server crashes in the middle of the night, an orchestrator like Kubernetes will automatically detect the failure and start a new, healthy container to replace it, often before any user notices.

### Practice Problem

Your application consists of a web server, an API server, and a database. List three tasks an orchestrator could automate for you when deploying an update to the API server.
