---
title: "Lesson 2: Migrations"
objective: "To use Django's migration system to manage changes to your database schema."
video: "https://www.youtube.com/embed/Sa_kQheCnds"
---

### Topics

- The "two-step" process: makemigrations and migrate.
- makemigrations: Creates the migration files based on changes to your models.
- migrate: Applies the pending migrations to the database.
- Viewing migration history.

### Example (The migration workflow)

```bash
# After changing your models.py file...

# 1. Create the migration file
python manage.py makemigrations

# 2. Apply the migration to the database
python manage.py migrate
```

### Practice Problem

After creating the Product model from the previous lesson, run the makemigrations and migrate commands. Then, add a new stock_count (IntegerField) to the Product model and run the migration commands again.
