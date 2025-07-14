---
title: "Lesson 2: User Authentication and Permissions"
objective: "To use Django's built-in authentication system to manage user registration, login, and access control."
video: "https://www.youtube.com/embed/t1A0-_A_JvY"
---

### Topics

- Django's built-in User model.
- Login and logout views.
- The @login_required decorator.
- Permissions and groups.

### Example (Protecting a view)

```python
from django.contrib.auth.decorators import login_required

@login_required
def secret_page(request):
    return render(request, 'secret_page.html')
```

### Practice Problem

Create a "profile" page that is only accessible to logged-in users. Redirect any non-logged-in users to the login page.
