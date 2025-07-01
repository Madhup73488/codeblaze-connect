# API Specification

This document outlines the API endpoints required for the application, including details on payloads and responses.

### User Management

**1. User Registration**
- **Endpoint:** `POST http://localhost:5000/api/connect/auth/register`
- **Description:** Creates a new user account.
- **Payload:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "user": {
      "id": "user-123",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

**2. User Login**
- **Endpoint:** `POST http://localhost:5000/api/connect/auth/login`
- **Description:** Authenticates a user and returns a token.
- **Payload:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "rememberMe": false
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "jwt-token-string"
  }
  ```

**3. Validate Token**
- **Endpoint:** `POST http://localhost:5000/api/connect/auth/validate-token`
- **Description:** Validates the JWT and returns the user data.
- **Headers:** `Authorization: Bearer <jwt-token>`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Token is valid",
    "user": {
      "id": "user-123",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
  ```

### Course Management

**1. Get All Courses**
- **Endpoint:** `GET http://localhost:5000/api/connect/courses`
- **Description:** Retrieves a list of all available courses.
- **Response:**
  ```json
  [
    {
      "id": "course-1",
      "title": "Introduction to React",
      "description": "Learn the fundamentals of React.",
      "instructor": "Jane Smith"
    }
  ]
  ```

**2. Get Single Course**
- **Endpoint:** `GET http://localhost:5000/api/connect/courses/{courseId}`
- **Description:** Retrieves details for a specific course.
- **Response:**
  ```json
  {
    "id": "course-1",
    "title": "Introduction to React",
    "description": "Learn the fundamentals of React.",
    "instructor": "Jane Smith",
    "modules": [
      {
        "id": "module-1",
        "title": "Getting Started",
        "lessons": [
          { "id": "lesson-1", "title": "What is React?" },
          { "id": "lesson-2", "title": "Setting up your environment" }
        ]
      }
    ]
  }
  ```

### Internship Management

**1. Get All Internships**
- **Endpoint:** `GET http://localhost:5000/api/connect/internships`
- **Description:** Retrieves a list of all available internships.
- **Response:**
  ```json
  [
    {
      "id": "internship-1",
      "title": "Frontend Developer Intern",
      "company": "Tech Corp",
      "description": "Work on exciting frontend projects."
    }
  ]
  ```

### User Data

**1. Get User Dashboard Data**
- **Endpoint:** `GET http://localhost:5000/api/connect/user/data`
- **Description:** Retrieves all data for the user's dashboard, including enrolled courses, internships, achievements, and stats.
- **Headers:** `Authorization: Bearer <jwt-token>`
- **Response:**
  ```json
  {
    "enrolledCourses": [
      {
        "id": "course-1",
        "title": "Introduction to React",
        "progress": 50
      }
    ],
    "enrolledInternships": [
      {
        "id": "internship-1",
        "title": "Frontend Developer Intern",
        "company": "Tech Corp",
        "progress": 25
      }
    ],
    "achievements": [
      {
        "id": "achievement-1",
        "title": "Course Completed",
        "description": "Finish your first course.",
        "earned": true
      }
    ],
    "stats": [
      { "label": "Courses Completed", "value": 1 },
      { "label": "Internships Applied", "value": 5 }
    ]
  }
