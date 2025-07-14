---
title: "Lesson 2: Route 53"
objective: "To use AWS's highly available and scalable Domain Name System (DNS) web service."
video: "https://www.youtube.com/embed/tJd13t4Wl1E"
---

### Topics

- Domain registration.
- Hosted Zones and Record Sets (A, CNAME, Alias).
- Routing Policies (Simple, Weighted, Latency-based).

### Example (Concept)

You can configure a Failover routing policy in Route 53. You would have two web servers in different regions. Route 53 will send all traffic to the primary server. If its health check fails, Route 53 will automatically start sending all traffic to the secondary server.

### Practice Problem

If you own a domain, create a hosted zone for it in Route 53. Create an 'A' record that points your domain to the public IP address of an EC2 instance you have running.
