---
title: "Lesson 2: Deployments: Managing Application Releases"
objective: "To use Deployments to manage the lifecycle of your application, including scaling and updates."
video: "https://www.youtube.com/embed/VkBabAG4R6g"
---

### Topics

- Why you rarely use raw Pods directly.
- Deployments providing self-healing and scaling.
- The replicas field.
- Performing rolling updates and rollbacks.

### Example (A Deployment for Nginx)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3 # We want 3 replicas of our pod
  selector:
    matchLabels:
      app: nginx
  template: # This is the Pod template
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21.6
        ports:
        - containerPort: 80
```

### Practice Problem

Create a Deployment for your redis-pod from the previous lesson, with 2 replicas. After it's running, update the image to a newer version and observe how Kubernetes performs a rolling update.
