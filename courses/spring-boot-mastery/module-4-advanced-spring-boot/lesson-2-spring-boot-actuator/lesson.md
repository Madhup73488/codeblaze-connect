---
title: "Lesson 2: Spring Boot Actuator"
objective: "To monitor and manage your application in production."
video: "https://www.youtube.com/embed/rT0naQ5I-MA"
---

### Topics

- Adding the spring-boot-starter-actuator dependency.
- Key endpoints: /health, /info, /metrics, /env.
- Securing Actuator endpoints.

### Example (Accessing health status)

After adding the Actuator starter, you can navigate to /actuator/health in your browser or API client to see the application's health status, including database connectivity.

### Practice Problem

Add the Actuator dependency to your project. Expose the metrics and env endpoints. Access the /actuator/metrics endpoint and find the metric for jvm.memory.used.
