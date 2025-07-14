---
title: "Lesson 3: Services: Exposing Your Applications"
objective: "To create a stable network endpoint to access your application Pods, both internally and externally."
video: "https://www.youtube.com/embed/T4V7N2p_0kM"
---

### Topics

- The problem of ephemeral Pod IP addresses.
- Labels and Selectors: How Services find Pods.
- Service Types: ClusterIP (internal), NodePort (external, for dev), LoadBalancer (external, for cloud).

### Example (A ClusterIP Service for the Nginx Deployment)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx # Finds pods with this label
  ports:
    - protocol: TCP
      port: 80 # The port the service is available on
      targetPort: 80 # The port on the pod to forward traffic to
```

### Practice Problem

Create a NodePort service for your Redis deployment. Use kubectl to find the port it's exposed on and try to connect to it from your local machine.
