---
title: "Lesson 1: Unit Testing Services"
objective: "To write unit tests for your business logic components using JUnit and Mockito."
video: "https://www.youtube.com/embed/kXhYu94a3Dw"
---

### Topics

- The @ExtendWith(MockitoExtension.class) annotation.
- Using @Mock to create mock objects.
- Using @InjectMocks to inject mocks into the class under test.
- Stubbing method calls with when(...).thenReturn(...).

### Example (Testing a service)

```java
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {
    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void testGetProductById() {
        Product product = new Product(1L, "Test Product", 10.0);
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        Product found = productService.getProductById(1L);
        assertEquals("Test Product", found.getName());
    }
}
```

### Practice Problem

Write a unit test for your UserService from Module 1. Mock the NotificationService and verify that its sendNotification method is called when a user is created.
