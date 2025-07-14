---
title: "Lesson 1: Infrastructure as Code (IaC) with CloudFormation"
objective: "To model and provision your AWS infrastructure using code."
video: "https://www.youtube.com/embed/6A4-Y2BYHTo"
---

### Topics

- The benefits of IaC (repeatability, versioning, automation).
- Introduction to AWS CloudFormation.
- Stacks and Templates (YAML or JSON).
- Key sections of a template: Resources, Parameters, Outputs.

### Example (A simple CloudFormation template snippet)

```yaml
Resources:
  MyS3Bucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      BucketName: my-unique-cloudformation-bucket-123
```

### Practice Problem

Write a complete CloudFormation template that provisions a single S3 bucket. Deploy it as a stack using the AWS Management Console.
