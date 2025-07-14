---
title: "Lesson 1: Classes and Objects"
objective: "To understand the basics of OOP by defining classes and creating objects (instances)."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/3u1fu6f8Hto"
---

### Topics

- The class keyword.
- Fields (instance variables).
- Methods (instance methods).
- Constructors for initializing objects.
- The new keyword to create instances.

### Example (A Car class)

```java
public class Car {
    String make;
    String model;

    // Constructor
    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    public void startEngine() {
        System.out.println("Engine started for " + this.make + " " + this.model);
    }
}

// To create an object: Car myCar = new Car("Toyota", "Camry");
```

### Practice Problem

Create a Book class with fields for title and author. Create a constructor to initialize these fields. Then, in your main method, create two different Book objects.
