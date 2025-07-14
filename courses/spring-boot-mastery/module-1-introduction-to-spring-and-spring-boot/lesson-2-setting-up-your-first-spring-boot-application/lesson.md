---
title: "Lesson 2: Setting Up Your First Spring Boot Application"
objective: "To create and run a simple \"Hello, World!\" Spring Boot application using the Spring Initializr."
video: "https://www.youtube.com/embed/31sQ8iB6y7s"
---

### Topics

- Using start.spring.io (Spring Initializr) to generate a project.
- Understanding the project structure: pom.xml (Maven) or build.gradle (Gradle).
- The main application class with the @SpringBootApplication annotation.
- Running the application from your IDE or the command line.

### Example (Main Application Class)

```java
// src/main/java/com/example/demo/DemoApplication.java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

### Practice Problem

Go to start.spring.io. Generate a new Maven project with Java, using the latest stable Spring Boot version. Add the "Spring Web" dependency. Download, unzip, and run the project in your favorite IDE.
