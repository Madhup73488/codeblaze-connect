---
title: "Lesson 2: Performance and the N+1 Problem"
objective: "To understand, identify, and solve the common N+1 query problem in GraphQL APIs."
video: "https://www.youtube.com/embed/l2eShyS7I-I"
---

### Topics

- What is the N+1 problem?
- Using Dataloader to batch and cache database requests within a single tick of the event loop.
- Integrating Dataloader with your context.

### Example (Concept)

If you query for 10 posts and each post's author, a naive implementation would make 1 query for the posts, and then 10 separate queries for each author (1 + N queries). Dataloader batches the 10 author lookups into a single query like SELECT * FROM users WHERE id IN (1, 2, 3, ...).

### Practice Problem

Look at the User and Post resolvers you wrote in Module 3. Explain where an N+1 problem would occur if a client requested a list of 20 posts, each with its author.
