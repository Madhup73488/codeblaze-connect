# Database Models

This document outlines the database models required to support the API specification.

### User Model

- **TableName:** `Users`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `name`: STRING
  - `email`: STRING (Unique)
  - `password`: STRING (Hashed)
  - `bio`: TEXT
  - `avatar`: STRING (URL)
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Course Model

- **TableName:** `Courses`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `title`: STRING
  - `description`: TEXT
  - `instructor`: STRING
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Module Model

- **TableName:** `Modules`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `title`: STRING
  - `courseId`: STRING (Foreign Key to Courses)
  - `order`: INTEGER
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Lesson Model

- **TableName:** `Lessons`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `title`: STRING
  - `moduleId`: STRING (Foreign Key to Modules)
  - `content`: TEXT
  - `order`: INTEGER
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Enrollment Model

- **TableName:** `Enrollments`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `userId`: STRING (Foreign Key to Users)
  - `courseId`: STRING (Foreign Key to Courses)
  - `progress`: INTEGER
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Internship Model

- **TableName:** `Internships`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `title`: STRING
  - `company`: STRING
  - `description`: TEXT
  - `requirements`: ARRAY of STRINGS
  - `responsibilities`: ARRAY of STRINGS
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Application Model

- **TableName:** `Applications`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `userId`: STRING (Foreign Key to Users)
  - `internshipId`: STRING (Foreign Key to Internships)
  - `resume`: STRING (URL)
  - `coverLetter`: STRING (URL)
  - `status`: STRING (e.g., "Applied", "In Review", "Offered", "Rejected")
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Achievement Model

- **TableName:** `Achievements`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `userId`: STRING (Foreign Key to Users)
  - `title`: STRING
  - `description`: TEXT
  - `earned`: BOOLEAN
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME

### Stat Model

- **TableName:** `Stats`
- **Attributes:**
  - `id`: STRING (Primary Key)
  - `userId`: STRING (Foreign Key to Users)
  - `label`: STRING
  - `value`: INTEGER
  - `createdAt`: DATETIME
  - `updatedAt`: DATETIME
