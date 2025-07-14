---
title: "Lesson 1: Amazon CloudWatch"
objective: "To collect and track metrics, collect and monitor log files, and set alarms."
video: "https://www.youtube.com/embed/Ad-d_nK2GvA"
---

### Topics

- CloudWatch Metrics: Default and custom metrics.
- CloudWatch Alarms: Triggering notifications based on thresholds.
- CloudWatch Logs: Centralizing logs from EC2, Lambda, and other services.

### Example (Concept)

You can create a CloudWatch Alarm that monitors the CPUUtilization metric for an EC2 instance. If the CPU usage stays above 80% for 5 minutes, the alarm can trigger an action, such as sending you an email notification.

### Practice Problem

Create a CloudWatch Alarm for the EC2 instance you launched in Module 2. The alarm should trigger if the CPU Utilization is greater than 70% for two consecutive periods of 5 minutes.
