---
title: "Lesson 1: StatefulSets, DaemonSets, and Jobs"
objective: "To learn about specialized controllers for stateful apps, node-level agents, and batch processing."
video: "https://www.youtube.com/embed/Dotz_vstn-I"
---

### Topics

- StatefulSets: For stateful applications like databases that require stable, unique network identifiers and persistent storage.
- DaemonSets: Ensures that all (or some) Nodes run a copy of a Pod. Useful for logging or monitoring agents.
- Jobs & CronJobs: For running tasks that complete, and for running them on a schedule.

### Example (Concept)

You would use a Deployment for a stateless web server, a StatefulSet for a PostgreSQL database cluster, a DaemonSet to run a log collector on every node, and a CronJob to perform a database backup every night at 2 AM.

### Practice Problem

Write the YAML for a CronJob that runs a simple container every minute to print the current date.
