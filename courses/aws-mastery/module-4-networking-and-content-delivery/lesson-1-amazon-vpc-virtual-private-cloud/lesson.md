---
title: "Lesson 1: Amazon VPC (Virtual Private Cloud)"
objective: "To provision a logically isolated section of the AWS Cloud where you can launch AWS resources."
video: "https://www.youtube.com/embed/T4q0k-p6-4w"
---

### Topics

- VPCs, Subnets (Public and Private).
- Internet Gateways (IGW) and NAT Gateways.
- Route Tables.
- Network ACLs vs. Security Groups.

### Example (Concept)

A typical secure architecture involves placing your web servers in a public subnet (so they can be reached from the internet via an IGW) and your databases in a private subnet (which can only be reached from within your VPC, not directly from the internet).

### Practice Problem

Draw a simple network diagram for a 2-tier application (web and database). It should include one VPC, one public subnet, one private subnet, an Internet Gateway, and a NAT Gateway. Show where the EC2 instances for each tier would be placed.
