---
title: "Lesson 1: Introduction to Spring Security"
objective: "To understand the basic architecture of Spring Security and enable basic authentication."
video: "https://www.youtube.com/embed/her_7pa0vrg"
---

### Topics

- The Servlet Filter Chain.
- The SecurityFilterChain bean.
- Enabling HTTP Basic authentication.
- In-memory user details service.

### Example (Basic Security Configuration)

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
```

### Practice Problem

Add the spring-boot-starter-security dependency to your project. This will secure all endpoints by default. Configure an in-memory user with a username and password and try to access one of your API endpoints.
