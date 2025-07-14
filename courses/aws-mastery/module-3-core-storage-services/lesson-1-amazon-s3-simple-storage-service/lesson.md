---
title: "Lesson 1: Amazon S3 (Simple Storage Service)"
objective: "To master object storage for use cases like backups, static website hosting, and big data analytics."
video: "https://www.youtube.com/embed/g-I4g9-b-Fg"
---

### Topics

- Buckets and Objects.
- Storage Classes (e.g., S3 Standard, S3 Glacier).
- Versioning and Lifecycle Policies.
- Static Website Hosting.
- S3 Security: Bucket Policies and ACLs.

### Example (AWS CLI command to copy a file to S3)

```bash
aws s3 cp my-local-file.txt s3://my-unique-bucket-name/
```

### Practice Problem

Create a new S3 bucket. Enable static website hosting on it and upload a simple index.html and error.html file. Access the public URL to view your website.
