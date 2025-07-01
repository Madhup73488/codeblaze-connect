### Introduction to OOP in JavaScript
*   Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data (properties) and code (methods).
*   JavaScript is a prototype-based language, but ES6 introduced `class` syntax, which provides a more familiar, syntactical sugar over the existing prototype-based inheritance. It makes OOP concepts like inheritance and encapsulation easier to implement and understand.

### Classes (`class` keyword)
*   A blueprint for creating objects.
*   `constructor` method: A special method for creating and initializing an object created with a class.
*   **Methods:** Functions defined inside a class that operate on the object's data.
*   **`this` keyword:** Refers to the current instance of the class.
    ```javascript
    class Person {
      constructor(name, age) {
        this.name = name; // Property
        this.age = age;   // Property
      }

      // Method
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }

      // Getter (a method that gets a property)
      get birthYear() {
        return new Date().getFullYear() - this.age;
      }

      // Setter (a method that sets a property)
      set newAge(age) {
        if (age > 0) {
          this.age = age;
        } else {
          console.error("Age must be positive.");
        }
      }
    }

    // Creating instances (objects) of the Person class
    const person1 = new Person("Alice", 25);
    person1.greet(); // "Hello, my name is Alice and I am 25 years old."
    console.log(person1.birthYear); // Calculates birth year based on current year

    const person2 = new Person("Bob", 40);
    person2.newAge = 41; // Using the setter
    person2.greet(); // "Hello, my name is Bob and I am 41 years old."
    person2.newAge = -5; // Error message
    ```

### Inheritance (`extends`, `super`)
*   Allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). Promotes code reuse.
*   `extends`: Keyword used to inherit from another class.
*   `super()`: Must be called in the constructor of the child class to call the parent class's constructor.
    ```javascript
    class Student extends Person {
      constructor(name, age, studentId) {
        super(name, age); // Call the parent (Person) constructor
        this.studentId = studentId;
      }

      study() {
        console.log(`${this.name} (ID: ${this.studentId}) is studying.`);
      }

      // Override parent method
      greet() {
        console.log(`Hi, I'm ${this.name}, a student with ID ${this.studentId}.`);
      }
    }

    const student1 = new Student("Charlie", 20, "S12345");
    student1.greet();  // "Hi, I'm Charlie, a student with ID S12345." (Overridden method)
    student1.study();  // "Charlie (ID: S12345) is studying."
    ```

### Static Methods
*   Methods that belong to the class itself, not to instances of the class.
*   Called directly on the class name (e.g., `ClassName.staticMethod()`).
*   Often used for utility functions related to the class but not specific to an object's state.
    ```javascript
    class MathHelper {
      static add(a, b) {
        return a + b;
      }
      static PI = 3.14159; // Static property (ESNext)
    }

    console.log(MathHelper.add(5, 10)); // 15
    console.log(MathHelper.PI);         // 3.14159
    // const helper = new MathHelper();
    // helper.add(1, 2); // Error: helper.add is not a function
    ```

### Exercise: Build a Simple Shape Hierarchy
1.  Define a class called `Shape` with a constructor that takes `color`. Include a method `describe()` that logs "This is a ${this.color} shape."
2.  Define a class called `Circle` that `extends` `Shape`. Its constructor should take `color` and `radius`. Call `super()`.
3.  Add a method `getArea()` to `Circle` that calculates and returns the area (π * radius^2). Use `Math.PI`.
4.  Define another class called `Rectangle` that `extends` `Shape`. Its constructor should take `color`, `width`, and `height`.
5.  Add a method `getArea()` to `Rectangle` that calculates and returns the area (width * height).
6.  Create instances of `Circle` and `Rectangle`. Call their `describe()` and `getArea()` methods and log the results.

### Helpful Links:
*   [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
*   [JavaScript.info: Classes](https://javascript.info/class)
*   [OOP in JavaScript (freeCodeCamp)](https://www.freecodecamp.org/news/object-oriented-programming-in-javascript/)
