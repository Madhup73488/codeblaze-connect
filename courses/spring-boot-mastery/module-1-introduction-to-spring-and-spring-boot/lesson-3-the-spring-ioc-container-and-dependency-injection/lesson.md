---
title: "Lesson 3: The Spring IoC Container and Dependency Injection"
objective: "To understand the core concept of Inversion of Control (IoC) and Dependency Injection (DI)."
video: "https://www.youtube.com/embed/v9o3i39hdJo"
---

### Topics

- The Spring ApplicationContext (the IoC container).
- What are Spring Beans?
- Stereotype annotations: @Component, @Service, @Repository.
- Injecting dependencies with @Autowired.
- Constructor injection vs. field injection.

### Example (Dependency Injection)

```java
@Service
public class WelcomeService {
    public String getWelcomeMessage() {
        return "Welcome to Spring Boot!";
    }
}

@RestController
public class WelcomeController {
    private final WelcomeService welcomeService;

    // Constructor Injection (recommended)
    @Autowired
    public WelcomeController(WelcomeService welcomeService) {
        this.welcomeService = welcomeService;
    }

    @GetMapping("/")
    public String home() {
        return welcomeService.getWelcomeMessage();
    }
}
```

### Practice Problem

Create a NotificationService with a method sendNotification(String message). Then, create a UserService that depends on the NotificationService. Inject the NotificationService into the UserService using constructor injection.
