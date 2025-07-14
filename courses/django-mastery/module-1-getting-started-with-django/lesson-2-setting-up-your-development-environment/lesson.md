---
title: "Lesson 2: Setting Up Your Development Environment"
objective: "To install Django and set up a new project using virtual environments."
video: "https://www.youtube.com/embed/rHux0g2I_kc"
---

### Topics

- The importance of virtual environments (venv).
- Installing Django using pip.
- Creating a new Django project with django-admin startproject.
- Understanding the project structure (manage.py, settings.py, urls.py).
- Running the development server.

### Example (Setup commands)

```bash
# Create and activate a virtual environment
python -m venv myenv
source myenv/bin/activate  # On Windows: myenv\Scripts\activate

# Install Django
pip install django

# Create a new project
django-admin startproject myproject .

# Run the development server
python manage.py runserver
```

### Practice Problem

Create a new virtual environment called djangodev. Activate it, install the latest version of Django, and create a new project named myblog. Start the development server and view the default welcome page in your browser.
