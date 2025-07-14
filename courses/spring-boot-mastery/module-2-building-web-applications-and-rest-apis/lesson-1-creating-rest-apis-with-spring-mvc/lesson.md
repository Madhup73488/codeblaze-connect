---
title: "Lesson 1: Creating REST APIs with Spring MVC"
objective: "To build RESTful web services that can produce JSON data."
video: "https://www.youtube.com/embed/5PdEmeopJVQ"
---

### Topics

- The @RestController annotation.
- Request mapping annotations: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping.
- Binding request data: @PathVariable, @RequestParam, @RequestBody.

### Example (A simple Product API)

```java
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        // In a real app, you'd fetch this from a service/database
        return new Product(id, "Sample Product", 99.99);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product newProduct) {
        // Logic to save the new product
        System.out.println("Created product: " + newProduct.getName());
        return newProduct;
    }
}
```

### Practice Problem

Create a TaskController with two endpoints: a GET endpoint at /api/tasks that returns a hardcoded list of tasks, and a POST endpoint at /api/tasks that accepts a new task and prints its name to the console.
