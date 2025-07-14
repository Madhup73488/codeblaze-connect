---
title: "Lesson 3: The Django ORM: Querying Data"
objective: "To interact with the database using Python code instead of raw SQL."
video: "https://www.youtube.com/embed/N-A5n2vooXU"
---

### Topics

- The Django ORM (Object-Relational Mapper).
- Managers (.objects).
- Making queries: .all(), .get(), .filter(), .exclude().
- Chaining queries.
- Field lookups (__gt, __icontains).

### Example (Basic queries)

```python
# Get all posts
all_posts = Post.objects.all()

# Get a single post by its primary key
post = Post.objects.get(pk=1)

# Filter for posts containing "Django" in the title
django_posts = Post.objects.filter(title__icontains="Django")
```

### Practice Problem

Use the Django shell (python manage.py shell) to create a few Product instances. Then, write a query to retrieve all products that cost more than 50.00 and are currently available.
