---
title: "Lesson 3: Container Services: ECS & EKS"
objective: "To understand how to run and manage Docker containers at scale on AWS."
video: "https://www.youtube.com/embed/56A2vaA91ko"
---

### Topics

- ECS (Elastic Container Service): AWS's native, simpler container orchestrator.
- EKS (Elastic Kubernetes Service): AWS's managed Kubernetes service.
- Fargate: The serverless compute engine for containers.
- ECR (Elastic Container Registry): Storing your Docker images.

### Example (Concept)

If you have a Dockerized application and want the simplest path to running it on AWS, ECS with Fargate is an excellent choice. If your team already has Kubernetes expertise or you require the power and flexibility of the K8s ecosystem, you would use EKS.

### Practice Problem

Push a simple Nginx Docker image to your own ECR repository.
