---
title: "Lesson 3: Installation and Setup"
objective: "To install PostgreSQL on your operating system and connect to it using the command-line client psql."
video: "https://www.youtube.com/embed/c2-0-p_GOs0"
---

### Topics

- Installing PostgreSQL on Windows, macOS, and Linux (using package managers).
- The psql command-line interface: Connecting to a database.
- Basic psql meta-commands: \l (list databases), \dt (list tables), \d table_name (describe table), \q (quit).
- Using a GUI tool like pgAdmin or DBeaver.

### Example (Connecting with psql)

```sql
# Connect to the default postgres database as the postgres user
psql -U postgres
```

### Practice Problem

After installing PostgreSQL, use psql to create a new database called my_first_db. Then, list all databases to confirm it was created.
