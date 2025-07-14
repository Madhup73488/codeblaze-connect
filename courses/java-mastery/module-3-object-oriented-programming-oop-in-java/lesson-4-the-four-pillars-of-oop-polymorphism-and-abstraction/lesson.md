---
title: "Lesson 4: The Four Pillars of OOP: Polymorphism & Abstraction"
objective: "To understand how objects can take on many forms and how to define contracts for classes."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/G1f2t11n4-g"
---

### Topics

- Polymorphism: An object of a subclass can be treated as an object of its superclass.
- Abstraction: Hiding complex implementation details and showing only essential features.
- abstract classes and methods.
- interfaces: A completely abstract contract of methods.

### Example (Interface)

```java
interface Drawable {
    void draw(); // An interface method has no body
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

### Practice Problem

Create an interface called Shape with a method getArea(). Then, create a Rectangle and Circle classes that both implement the Shape interface and provide their own logic for the getArea() method.
