---
title: "Lesson 3: Your First Java Program"
objective: "To write, compile, and run a simple \"Hello, World!\" program in Java."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/5u8rFbpdvds"
---

### Topics

- The public class structure.
- The public static void main(String[] args) method: The entry point of every Java application.
- System.out.println() for printing to the console.
- Compiling with javac and running with java.

### Example (Hello, World!)

```java
// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```bash
# Compilation and Execution
javac HelloWorld.java
java HelloWorld
```

### Practice Problem

Create a new Java file named MyInfo.java. Write a program that prints your name and your favorite programming language to the console on separate lines. Compile and run it.
