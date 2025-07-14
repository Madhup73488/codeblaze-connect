---
title: "Lesson 1: Build Tools: Maven and Gradle"
objective: "To understand the role of build tools for managing dependencies and building your project."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/85bY4G1M5e4"
---

### Topics

- What is a build tool?
- Maven: Convention over configuration, pom.xml.
- Gradle: Flexibility and performance, build.gradle.
- Dependency management.

### Example (A Maven dependency in pom.xml)

```xml
<dependencies>
    <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.10.1</version>
    </dependency>
</dependencies>
```

### Practice Problem

Create a new Maven project in your IDE. Add the JUnit 5 dependency to your pom.xml to enable testing.
