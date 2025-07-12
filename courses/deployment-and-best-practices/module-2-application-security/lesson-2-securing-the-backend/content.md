<iframe width="560" height="315" src="https://www.youtube.com/embed/dZ2CkvxuWIo?si=KdtS-4kk-NYC9Q8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To implement security best practices in the Node.js and Express backend.

**Topics:**

*   Data Validation (`joi`), Rate Limiting, `helmet`, CORS, Password Hashing (`bcrypt`)

**Example (Using Helmet.js):**

```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet to set various security-related HTTP headers
app.use(helmet());
```

**Practice Problem:**
Write a `joi` schema to validate a user login request. The request body should contain an `email` (which must be a valid email format) and a `password` (which must be a string of at least 8 characters). Both fields are required.
