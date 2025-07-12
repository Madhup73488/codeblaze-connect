<iframe width="560" height="315" src="https://www.youtube.com/embed/nMvjxJK3KRc?si=o325C46cHT6JnCGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To manage application configuration and secrets securely and efficiently across different environments.

**Topics:**

- The importance of `.env` files
- Managing development, staging, and production configs
- Using the `dotenv` package
- Security: Never commit `.env` files

**Example (.env file and usage):**

`.env` file:

```
MONGO_URI=mongodb://localhost:27017/my-app
PORT=5000
JWT_SECRET=averysecretkey
```

`server.js`:

```javascript
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// ... rest of the server setup
```

**Practice Problem:**
Your application needs a new API key for a third-party email service. Describe the steps you would take to add this key to your configuration securely, without exposing it in your Git repository.
