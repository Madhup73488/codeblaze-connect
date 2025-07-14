---
title: "Lesson 2: Transactions"
objective: "To group multiple commands into a single atomic operation."
video: "https://www.youtube.com/embed/5KzOi1gJ4pE"
---

### Topics

- MULTI, EXEC, DISCARD.
- How Redis transactions differ from RDBMS transactions (no rollback on command failure).
- Optimistic locking with WATCH.

### Example (A simple transaction)

```bash
MULTI
INCR user:1:balance
DECR user:2:balance
EXEC
```

### Practice Problem

Write a transaction that renames a user (RENAME user:1 user:1_old) and sets a new key (SET user:1 "new_data").
