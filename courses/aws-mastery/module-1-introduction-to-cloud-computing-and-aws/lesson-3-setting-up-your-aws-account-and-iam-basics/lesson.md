---
title: "Lesson 3: Setting Up Your AWS Account & IAM Basics"
objective: "To create a secure AWS account and understand the fundamentals of Identity and Access Management (IAM)."
video: "https://www.youtube.com/embed/ulx_r3Q-GqA"
---

### Topics

- Creating an AWS account and understanding the Free Tier.
- Securing your root user account (enabling MFA).
- IAM: Users, Groups, Roles, and Policies.
- The principle of least privilege.
- Setting up a billing alarm to avoid unexpected costs.

### Example (Best Practice)

After creating your AWS account, your first step should be to create a new IAM User with administrative privileges for your daily tasks. You should avoid using the powerful root user for anything other than initial setup and billing.

### Practice Problem

Create a new IAM Group called Developers. Then, create a new IAM User and add them to this group. Attach a managed policy to the Developers group that gives them read-only access to S3.
