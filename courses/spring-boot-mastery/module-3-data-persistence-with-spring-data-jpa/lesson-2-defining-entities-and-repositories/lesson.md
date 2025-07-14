---
title: "Lesson 2: Defining Entities and Repositories"
objective: "To map Java objects to database tables and create repository interfaces for data access."
video: "https://www.youtube.com/embed/T31Lg_3y42A"
---

### Topics

- The @Entity and @Id annotations.
- Other mapping annotations: @Column, @GeneratedValue.
- The JpaRepository interface.
- How Spring Data automatically provides CRUD methods.

### Example (A User entity and repository)

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    // Getters and setters...
}

public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data will automatically implement CRUD methods like save(), findById(), findAll(), etc.
}
```

### Practice Problem

Create a Product entity with fields for id, name, and price. Then, create a ProductRepository that extends JpaRepository.
