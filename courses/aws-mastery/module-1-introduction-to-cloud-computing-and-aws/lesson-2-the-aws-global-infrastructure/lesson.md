---
title: "Lesson 2: The AWS Global Infrastructure"
objective: "To understand how the AWS global infrastructure is structured to provide high availability and low latency."
video: "https://www.youtube.com/embed/7-I1vtvebQ4"
---

### Topics

- Regions: Geographically isolated areas.
- Availability Zones (AZs): Multiple, isolated data centers within a Region.
- Edge Locations: Used by CloudFront (CDN) to cache content closer to users.
- The concept of high availability and fault tolerance using multiple AZs.

### Example (Concept)

By deploying your application across multiple Availability Zones in a Region, you can ensure that if one data center fails (e.g., due to a power outage), your application remains available to users from the other data centers.

### Practice Problem

A company wants to serve customers in both Europe and North America with the lowest possible latency. What would be a better strategy: deploying their entire application in a single Region in the US, or deploying it in both a US Region and a European Region? Why?
