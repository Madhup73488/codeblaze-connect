---
title: "Lesson 2: The Four Pillars of OOP: Encapsulation"
objective: "To protect and control access to an object's data using access modifiers."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/s-w_F2-jd2I"
---

### Topics

- Access Modifiers: public, private, protected, default.
- The concept of "data hiding".
- Using public "getter" and "setter" methods to access private fields.

### Example (Encapsulation)

```java
public class BankAccount {
    private double balance; // private: can only be accessed within this class

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    // Public getter method
    public double getBalance() {
        return this.balance;
    }

    // Public setter method with validation
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}
```

### Practice Problem

Modify your Book class to make the title and author fields private. Create public getter methods for both fields.
