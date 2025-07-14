---
title: "Lesson 1: Connecting to a Database"
objective: "To configure a database connection and understand the basics of JPA."
video: "https://www.youtube.com/embed/Xg5iLpGPO4I"
---

### Topics

- Java Persistence API (JPA) and Hibernate.
- Adding the spring-boot-starter-data-jpa dependency.
- Configuring a data source in application.properties (e.g., for H2, PostgreSQL).
- Using the H2 in-memory database for rapid development.

### Example (application.properties for H2)

```properties
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

### Practice Problem

Configure your Spring Boot application to connect to an H2 in-memory database. Enable the H2 console and verify that you can access it in your browser.
