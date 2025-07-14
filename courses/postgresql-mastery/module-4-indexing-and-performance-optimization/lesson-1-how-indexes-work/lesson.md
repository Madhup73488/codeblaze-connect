---
title: "Lesson 1: How Indexes Work"
objective: "To understand the concept of a database index and how it speeds up data retrieval."
video: "https://www.youtube.com/embed/fsG1L0g_i2c"
---

### Topics

- The problem with full table scans.
- The B-Tree index: The default and most common index type.
- Other index types: Hash, GIN (for full-text search), GiST (for geometric data).
- Trade-offs: Indexes speed up reads but can slow down writes (INSERT, UPDATE).

### Example (Concept)

An index is like the index in the back of a book. Instead of scanning every page to find a topic (a full table scan), you can look up the topic in the index and go directly to the correct page (the data block on disk).

### Practice Problem

Explain in which scenarios a B-Tree index would be most effective for a query. What kind of WHERE clause would benefit most from it?
