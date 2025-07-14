---
title: "Lesson 2: Integration Testing"
objective: "To write integration tests that load the entire Spring application context."
video: "https://www.youtube.com/embed/74hQ8S12w48"
---

### Topics

- The @SpringBootTest annotation.
- Using TestRestTemplate or WebTestClient to make real HTTP requests to your running application.
- The @Sql annotation to set up database state.

### Example (An integration test)

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ProductControllerIntegrationTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testGetProductById() {
        ResponseEntity<Product> response = this.restTemplate.getForEntity("/api/products/1", Product.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Sample Product", response.getBody().getName());
    }
}
```

### Practice Problem

Write an integration test for your TaskController. Use @SpringBootTest and make a GET request to /api/tasks to ensure it returns a successful status code.
