---
title: "Lesson 2: Introduction to Kubernetes"
objective: "To understand the history, architecture, and core philosophy of Kubernetes."
video: "https://www.youtube.com/embed/R-3dfURb2hA"
---

### Topics

- History: Origins at Google (Borg).
- The declarative model: Desired state vs. current state.
- Kubernetes Architecture: Control Plane (API Server, etcd, Scheduler, Controller Manager) and Worker Nodes (Kubelet, Kube-proxy).

### Example (Concept)

You don't tell Kubernetes how to do something (imperative); you tell it what you want the end result to be (declarative). You declare, "I want 3 replicas of my web server running," and the controllers work to make that state a reality.

### Practice Problem

In the Kubernetes architecture, which component is responsible for storing the cluster's state? Which component watches for changes and starts pods on nodes?
