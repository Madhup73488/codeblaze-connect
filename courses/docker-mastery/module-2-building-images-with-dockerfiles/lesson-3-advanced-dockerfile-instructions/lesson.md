---
title: "Lesson 3: Advanced Dockerfile Instructions"
objective: "To master more advanced instructions for creating flexible and robust images."
video: "https://www.youtube.com/embed/Tshi6n_N_SA"
---

### Topics

- CMD vs. ENTRYPOINT: Understanding the difference.
- ENV: Setting environment variables.
- ARG: Build-time variables.
- EXPOSE: Documenting network ports.
- VOLUME: Creating mount points for persistent data.

### Example (Using ENTRYPOINT and CMD together)

```dockerfile
ENTRYPOINT ["/usr/bin/git"]
CMD ["--help"]
```
(This allows you to run docker run my-git-image log and it will execute /usr/bin/git log)

### Practice Problem

Create a Dockerfile for a simple Python Flask application. Use the ENV instruction to set the FLASK_APP and FLASK_ENV environment variables inside the image.
