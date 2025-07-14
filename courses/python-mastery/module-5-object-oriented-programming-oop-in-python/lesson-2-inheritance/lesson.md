---
title: "Lesson 2: Inheritance"
objective: "To create new classes that inherit properties and methods from existing classes."
video: "https://www.youtube.com/embed/RSl87lqOXDE"
---

### Topics

- Parent class (superclass) and child class (subclass).
- Extending and overriding methods.
- The super() function.

### Example (Inheritance)

```python
class Animal:
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Cat(Animal):
    def speak(self): # Overriding the parent method
        return "Meow"

class Dog(Animal):
    def speak(self):
        return "Woof"

my_cat = Cat()
print(my_cat.speak())
```

### Practice Problem

Create a Vehicle parent class with an __init__ method that sets a speed attribute. Then, create a Car child class that inherits from Vehicle and adds a wheels attribute, set to 4.
