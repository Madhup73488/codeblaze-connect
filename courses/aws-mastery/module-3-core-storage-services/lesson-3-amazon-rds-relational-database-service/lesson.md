---
title: "Lesson 3: Amazon RDS (Relational Database Service)"
objective: "To set up, operate, and scale a relational database in the cloud."
video: "https://www.youtube.com/embed/u4AI1c6n-4M"
---

### Topics

- Supported database engines (PostgreSQL, MySQL, etc.).
- The benefits of a managed service (patching, backups, scaling).
- Multi-AZ deployments for high availability.
- Read Replicas for read scaling.

### Example (Concept)

Instead of installing, patching, and backing up a PostgreSQL database on an EC2 instance yourself, you can use RDS. AWS handles the undifferentiated heavy lifting, allowing you to focus on your application's schema and queries.

### Practice Problem

Launch a new RDS instance using the PostgreSQL engine on the Free Tier. Use a database client on your local machine to connect to it.
