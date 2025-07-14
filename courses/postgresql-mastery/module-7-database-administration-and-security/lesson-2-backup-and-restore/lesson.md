---
title: "Lesson 2: Backup and Restore"
objective: "To learn how to perform logical backups and restores of your database."
video: "https://www.youtube.com/embed/pW22-x-i734"
---

### Topics

- pg_dump: Creating a logical backup of a database into a script file.
- pg_restore: Restoring a database from an archive file created by pg_dump.
- Different backup formats (plain, custom, directory).

### Example (Creating a backup)

```sql
# From the command line
pg_dump -U postgres -W -F c -b -v -f my_app_backup.dump my_app
```

### Practice Problem

Use pg_dump to create a backup of the database you created in Module 1. Then, drop the database and restore it from your backup file.
