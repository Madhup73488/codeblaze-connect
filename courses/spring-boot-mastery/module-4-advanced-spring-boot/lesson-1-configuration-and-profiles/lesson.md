---
title: "Lesson 1: Configuration and Profiles"
objective: "To manage application configuration for different environments (dev, test, prod)."
video: "https://www.youtube.com/embed/JdtY2ts-VjM"
---

### Topics

- application.properties vs. application.yml.
- Using profiles to separate configurations (application-dev.properties).
- The @Value annotation to inject properties.
- Type-safe configuration with @ConfigurationProperties.

### Example (Using profiles)

You can create application-dev.properties with an H2 database configuration and application-prod.properties with a PostgreSQL configuration. Then, you can run the application with -Dspring.profiles.active=prod to use the production settings.

### Practice Problem

Create two profiles, dev and prod. In the dev profile, set a property welcome.message to "Hello Developer". In the prod profile, set it to "Hello User". Create a controller that injects and returns this property. Test switching between profiles.
