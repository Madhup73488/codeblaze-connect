---
title: "Lesson 1: Amazon EC2 (Elastic Compute Cloud)"
objective: "To learn how to launch, configure, and manage virtual servers in the cloud."
video: "https://www.youtube.com/embed/ts_1uB4VqEw"
---

### Topics

- EC2 Instance Types (e.g., General Purpose, Compute Optimized).
- Amazon Machine Images (AMIs).
- Launching an EC2 instance.
- Security Groups: The virtual firewall for your instances.
- Connecting to an instance (using SSH for Linux, RDP for Windows).

### Example (AWS CLI command to launch an instance)

```bash
aws ec2 run-instances \
    --image-id ami-0abcdef1234567890 \
    --instance-type t2.micro \
    --key-name MyKeyPair \
    --security-group-ids sg-0123456789abcdef0
```

### Practice Problem

Launch a new t2.micro EC2 instance using the Amazon Linux 2 AMI. Configure its security group to allow inbound SSH traffic only from your IP address. Connect to the instance using SSH.
