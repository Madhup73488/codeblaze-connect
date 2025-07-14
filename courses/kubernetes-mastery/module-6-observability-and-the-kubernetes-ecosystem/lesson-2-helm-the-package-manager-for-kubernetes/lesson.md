---
title: "Lesson 2: Helm: The Package Manager for Kubernetes"
objective: "To learn how to manage complex Kubernetes applications using Helm charts."
video: "https://www.youtube.com/embed/v1-5_z9g_Y4"
---

### Topics

- The problem with managing many YAML files.
- What is Helm? (Charts, Releases, Repositories).
- Finding and installing existing charts (e.g., for Prometheus or Redis).
- Creating your own simple chart.

### Example (Installing a chart)

```bash
# Add the bitnami repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Install the redis chart
helm install my-redis bitnami/redis
```

### Practice Problem

Use Helm to install a stable postgresql chart into your cluster.
