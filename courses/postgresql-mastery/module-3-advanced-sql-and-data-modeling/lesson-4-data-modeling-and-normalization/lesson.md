---
title: "Lesson 4: Data Modeling and Normalization"
objective: "To learn how to design a logical database schema that reduces data redundancy and improves data integrity."
video: "https://www.youtube.com/embed/GFZp2i_g_gE"
---

### Topics

- Database Keys: Primary, Foreign, Candidate, Super.
- Relationships: One-to-One, One-to-Many, Many-to-Many.
- Normal Forms:
  - First Normal Form (1NF)
  - Second Normal Form (2NF)
  - Third Normal Form (3NF)

### Example (Concept)

To model a many-to-many relationship between students and courses, you create a third "join table" called enrollments with student_id and course_id columns. This avoids storing a list of students in the courses table or a list of courses in the students table.

### Practice Problem

Design the tables (including columns and primary/foreign keys) for a simple library system where books can be borrowed by members. A book can have multiple copies, and a member can borrow multiple books.
