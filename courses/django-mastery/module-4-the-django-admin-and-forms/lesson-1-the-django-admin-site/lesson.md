---
title: "Lesson 1: The Django Admin Site"
objective: "To use and customize Django's automatic admin interface."
video: "https://www.youtube.com/embed/w_s_bDE3-iM"
---

### Topics

- Activating the admin.
- Creating a superuser.
- Registering models with the admin.
- Customizing the admin with ModelAdmin.

### Example (Registering a model)

```python
# in blog/admin.py
from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date')
    list_filter = ('published_date',)
    search_fields = ('title', 'content')

admin.site.register(Post, PostAdmin)
```

### Practice Problem

Create a superuser for your project. Register your Product model with the admin site. Then, customize the admin to display the product's name, price, and is_available in the list view.
