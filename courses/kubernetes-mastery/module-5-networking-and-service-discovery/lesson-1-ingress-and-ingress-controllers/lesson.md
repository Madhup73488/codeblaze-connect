---
title: "Lesson 1: Ingress and Ingress Controllers"
objective: "To manage external access to the services in a cluster, typically HTTP."
video: "https://www.youtube.com/embed/80JqP6-2yA4"
---

### Topics

- The limitations of NodePort and LoadBalancer services.
- Ingress as an API object that manages external access.
- The need for an Ingress Controller (e.g., NGINX, Traefik).
- Path-based and host-based routing.

### Example (An Ingress manifest)

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
spec:
  rules:
  - host: "myapp.example.com"
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 8080
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

### Practice Problem

You have two services, auth-service and products-service. Write an Ingress resource that routes requests to your-app.com/auth to the auth-service and requests to your-app.com/products to the products-service.
