---
title: "Lesson 1: Pods: The Atomic Unit of Deployment"
objective: "To understand what a Pod is and how to define and deploy a simple one."
video: "https://www.youtube.com/embed/T_g90qYgTSo"
---

### Topics

- Pods as the smallest deployable unit in Kubernetes.
- A Pod encapsulates one or more containers, storage, and network resources.
- Writing a Pod manifest (YAML file).
- kubectl apply, kubectl get pods, kubectl describe pod, kubectl logs.

### Example (A simple Nginx Pod YAML)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Practice Problem

Write a YAML manifest for a Pod named redis-pod that runs the redis:alpine image. Apply it to your cluster and then use kubectl to view its logs.
