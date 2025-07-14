---
title: "Lesson 2: Persistent Storage"
objective: "To provide stateful applications with persistent storage that survives Pod restarts."
video: "https://www.youtube.com/embed/0swOh5C3OaY"
---

### Topics

- Volumes: A directory that exists for the life of a Pod.
- PersistentVolumes (PVs): A piece of storage in the cluster, provisioned by an administrator.
- PersistentVolumeClaims (PVCs): A request for storage by a user.
- StorageClasses for dynamic provisioning.

### Example (A PVC and mounting it in a Pod)

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
---
# In your Pod/Deployment spec:
# ...
      volumeMounts:
      - name: postgres-storage
        mountPath: /var/lib/postgresql/data
  volumes:
  - name: postgres-storage
    persistentVolumeClaim:
      claimName: postgres-pvc
```

### Practice Problem

Create a PVC that requests 1Gi of storage. Then, create a simple Nginx pod that mounts this PVC to the /usr/share/nginx/html directory. Use kubectl exec to create an index.html file inside the mount path. Delete the pod and recreate it. Does the file persist?
