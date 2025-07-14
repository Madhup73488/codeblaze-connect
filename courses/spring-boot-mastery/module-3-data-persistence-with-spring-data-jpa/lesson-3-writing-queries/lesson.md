---
title: "Lesson 3: Writing Queries"
objective: "To retrieve data from the database using derived query methods and custom queries."
video: "https://www.youtube.com/embed/KxT6gR_0a_s"
---

### Topics

- Derived query methods from method names (e.g., findByName, findByPriceGreaterThan).
- Using the @Query annotation to write custom JPQL or native SQL queries.

### Example (Derived and custom queries)

```java
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Derived query method - Spring Data implements this for you
    List<Product> findByCategory(String category);

    // Custom JPQL query
    @Query("SELECT p FROM Product p WHERE p.price > :minPrice")
    List<Product> findProductsWithPriceGreaterThan(@Param("minPrice") double minPrice);
}
```

### Practice Problem

In your ProductRepository, add a method signature that will find all products with a price less than a given value. Then, inject the repository into a service and use it to fetch data.
