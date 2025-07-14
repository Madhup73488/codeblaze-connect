---
title: "Lesson 1: User Roles and Privileges"
objective: "To manage access control by creating user roles and granting specific permissions."
video: "https://www.youtube.com/embed/5GT_Bda_yqI"
---

### Topics

- CREATE ROLE, CREATE USER.
- GRANT and REVOKE for assigning privileges (e.g., SELECT, INSERT) on tables, schemas, etc.
- Role inheritance.

### Example (Creating a read-only user)

```sql
CREATE ROLE readonly_user LOGIN PASSWORD 'securepassword';
GRANT CONNECT ON DATABASE my_app TO readonly_user;
GRANT USAGE ON SCHEMA public TO readonly_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
```

### Practice Problem

Create a new role for a data analyst who should only be able to read from the orders and products tables but not modify them.
