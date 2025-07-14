---
title: "Lesson 1: Creating Databases and Tables"
objective: "To define the structure of your database by creating tables and specifying data types for columns."
video: "https://www.youtube.com/embed/huf_Fw1_C5I"
---

### Topics

- CREATE DATABASE and CREATE TABLE syntax.
- Common Data Types: INTEGER, VARCHAR(n), TEXT, BOOLEAN, DATE, TIMESTAMP.
- The SERIAL pseudo-type for auto-incrementing integers.
- DROP TABLE and DROP DATABASE.

### Example (Creating a users table)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Practice Problem

Create a products table with columns for id (auto-incrementing), name (text), price (numeric), and in_stock (boolean).
