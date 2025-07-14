---
title: "Lesson 2: Working with Django Forms"
objective: "To create forms, handle user input, and validate data."
video: "https://www.youtube.com/embed/6o_4Q5C-1xE"
---

### Topics

- The Form and ModelForm classes.
- Rendering forms in templates.
- Handling GET and POST requests.
- Validating form data with is_valid().
- The Post/Redirect/Get pattern.

### Example (A simple contact form view)

```python
# in views.py
from .forms import ContactForm

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process the data
            return redirect('success_page')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})
```

### Practice Problem

Create a ModelForm for your Product model. Then, create a view and template that allows a user to add a new product through the form.
