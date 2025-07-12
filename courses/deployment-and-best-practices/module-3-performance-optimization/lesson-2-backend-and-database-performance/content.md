<iframe width="560" height="315" src="https://www.youtube.com/embed/zvWKqUiovAM?si=ZX2cn2vZzHlRRkyy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To optimize the performance of the Node.js server and MongoDB database.

**Topics:**

*   Database Indexing, Query Optimization, Caching (In-memory, Redis), Load Balancing

**Example (Creating an Index in Mongoose):**

```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }
});

// Create an index on the email field for faster lookups
userSchema.index({ email: 1 });
```

**Practice Problem:**
Your application has a feature that allows users to search for products by name. This query is becoming very slow as the number of products grows. What is the single most effective change you can make to your MongoDB collection to speed up this query?
