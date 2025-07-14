---
title: "Lesson 1: Java 8: Lambda Expressions and Streams"
objective: "To write more functional, declarative code using Lambda Expressions and the Streams API."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/gpIUfj3KaOc"
---

### Topics

- Lambda Expressions: Anonymous functions.
- Functional Interfaces.
- The Streams API: A way to process collections of data.
- Intermediate operations (filter, map) and terminal operations (forEach, collect).

### Example (Using Streams and Lambdas)

```java
import java.util.Arrays;
import java.util.List;

List<String> names = Arrays.asList("alice", "bob", "charlie");

// Filter for names starting with 'a', capitalize them, and print them.
names.stream()
     .filter(name -> name.startsWith("a"))
     .map(String::toUpperCase)
     .forEach(System.out::println); // Output: ALICE
```

### Practice Problem

Given a list of integers, use the Streams API to find the sum of all the even numbers in the list.
