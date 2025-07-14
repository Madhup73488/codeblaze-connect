---
title: "Lesson 3: The Four Pillars of OOP: Inheritance"
objective: "To create new classes that inherit properties and methods from existing classes."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/he9_w84EKXw"
---

### Topics

- The extends keyword.
- Superclass (parent) and Subclass (child).
- The super keyword to call parent constructors and methods.
- Method Overriding.

### Example (Inheritance)

```java
public class Animal {
    public void speak() {
        System.out.println("The animal makes a sound");
    }
}

public class Dog extends Animal {
    @Override // Good practice to use this annotation
    public void speak() {
        System.out.println("The dog barks");
    }
}
```

### Practice Problem

Create a Vehicle parent class with a speed field. Then, create a Motorcycle child class that inherits from Vehicle and adds a hasSidecar boolean field.
