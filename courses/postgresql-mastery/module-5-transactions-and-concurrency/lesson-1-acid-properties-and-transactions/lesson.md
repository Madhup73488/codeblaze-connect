---
title: "Lesson 1: ACID Properties and Transactions"
objective: "To understand the importance of ACID compliance and how to manage transactions."
video: "https://www.youtube.com/embed/fP_22T_2sFk"
---

### Topics

- ACID: Atomicity, Consistency, Isolation, Durability.
- Managing transactions with BEGIN, COMMIT, and ROLLBACK.
- Savepoints for partial rollbacks.

### Example (A bank transfer transaction)

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Or ROLLBACK if something went wrong
```

### Practice Problem

Write a transaction to insert a new user and their first order into the database. If the order insertion fails, the user insertion should also be rolled back.
