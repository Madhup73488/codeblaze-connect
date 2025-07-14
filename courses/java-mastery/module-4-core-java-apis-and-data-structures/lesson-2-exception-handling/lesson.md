---
title: "Lesson 2: Exception Handling"
objective: "To handle runtime errors gracefully without crashing your program."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/3QfuVz2m45I"
---

### Topics

- The try-catch block.
- The finally block.
- Checked vs. Unchecked exceptions.
- The throw and throws keywords.

### Example (Handling an exception)

```java
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[5]); // This will cause an exception
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Error: Array index is out of bounds.");
} finally {
    System.out.println("The 'try catch' is finished.");
}
```

### Practice Problem

Write a method that divides two numbers. Use a try-catch block to handle the ArithmeticException that occurs if you try to divide by zero.
