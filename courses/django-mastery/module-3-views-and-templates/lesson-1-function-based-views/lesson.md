---
title: "Lesson 1: Function-Based Views"
objective: "To write simple views that handle HTTP requests and return responses."
video: "https://www.youtube.com/embed/yv3eTYg_C8s"
---

### Topics

- The request-response cycle.
- The request object.
- Returning HttpResponse.
- The render shortcut for rendering templates.
- Passing context data from the view to the template.

### Example (A simple view)

```python
# in blog/views.py
from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.all().order_by('-published_date')
    context = {'posts': posts}
    return render(request, 'blog/post_list.html', context)
```

### Practice Problem

Create a view for your products app that fetches all Product objects from the database and passes them to a template named products/product_list.html.
