---
title: "Lesson 1: Logging, Monitoring, and Probes"
objective: "To understand how to monitor the health and performance of your applications."
video: "https://www.youtube.com/embed/k_i6hB5T4vI"
---

### Topics

- Health Checks: Liveness, Readiness, and Startup Probes.
- Logging architecture in Kubernetes.
- Monitoring with Prometheus and Grafana (high-level overview).

### Example (Liveness and Readiness Probes)

```yaml
# In your container spec:
# ...
    livenessProbe:
      httpGet:
        path: /healthz
        port: 8080
      initialDelaySeconds: 3
      periodSeconds: 3
    readinessProbe:
      httpGet:
        path: /readyz
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5
```

### Practice Problem

What is the difference between a Liveness Probe and a Readiness Probe? What does Kubernetes do if each one fails?
