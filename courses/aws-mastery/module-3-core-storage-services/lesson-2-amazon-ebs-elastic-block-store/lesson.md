---
title: "Lesson 2: Amazon EBS (Elastic Block Store)"
objective: "To understand and manage persistent block storage volumes for use with EC2 instances."
video: "https://www.youtube.com/embed/z642An2tB8s"
---

### Topics

- EBS as a "virtual hard drive" for EC2.
- Volume Types (gp2, gp3, io1, io2).
- Snapshots: Creating point-in-time backups of your volumes.
- Attaching and detaching volumes from instances.

### Example (Concept)

When you terminate an EC2 instance, its root EBS volume is usually deleted by default. If you want to keep the data, you can either change this setting or detach the volume and re-attach it to a new instance later.

### Practice Problem

Create a new 10GiB EBS volume. Attach it to a running EC2 instance. SSH into the instance and format and mount the new volume.
