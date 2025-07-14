---
title: "Lesson 3: Setting Up a Kubernetes Cluster"
objective: "To install a local Kubernetes cluster for development and learn to interact with it using kubectl."
video: "https://www.youtube.com/embed/kTpV_Wk2-h0"
---

### Topics

- Local cluster options: Minikube, kind, Docker Desktop.
- The kubectl command-line interface: The primary tool for interacting with a cluster.
- Basic kubectl commands: get nodes, get pods, cluster-info.
- Understanding contexts.

### Example (Starting a cluster with kind)

```bash
# Create a new local cluster
kind create cluster --name my-dev-cluster

# Check the status of the nodes
kubectl get nodes
```

### Practice Problem

Install Minikube on your machine. Start a new cluster, then use kubectl to find out the version of both the client (kubectl) and the server (the Kubernetes control plane).
