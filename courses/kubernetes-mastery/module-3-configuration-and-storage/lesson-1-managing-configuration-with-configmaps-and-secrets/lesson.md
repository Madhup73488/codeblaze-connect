---
title: "Lesson 1: Managing Configuration with ConfigMaps & Secrets"
objective: "To decouple configuration from your container images."
video: "https://www.youtube.com/embed/B_Vd_u_a804"
---

### Topics

- ConfigMaps for non-sensitive configuration data.
- Secrets for sensitive data (API keys, passwords).
- Consuming ConfigMaps and Secrets as environment variables or mounted files.

### Example (A ConfigMap and consuming it)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  API_URL: "https://api.example.com"
  FEATURE_FLAG_A: "true"
---
# In your Deployment spec:
# ...
      envFrom:
      - configMapRef:
          name: app-config
```

### Practice Problem

Create a Secret to hold a dummy database password. Then, modify your application's Deployment to mount this secret as an environment variable named DB_PASSWORD.
