# Lesson 2.3: Data Validation and Relationships

*   **Mongoose Schema Validation (Recap & Deep Dive)**
    *   Mongoose schemas provide built-in validation rules for data types, required fields, unique fields, min/max values for numbers/strings, enums, and regex patterns.
    *   **Custom Validators:** Define your own validation functions for more complex logic.
        *   **Example: Custom password validation**
            ```javascript
            const userSchema = mongoose.Schema({
              // ...
              password: {
                type: String,
                required: true,
                minlength: [6, 'Password must be at least 6 characters long'],
                validate: {
                  validator: function(v) { // 'v' is the value of the field
                    return /[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v);
                  },
                  message: 'Password must contain at least one uppercase, one lowercase, one number, and one special character.'
                }
              }
              // ...
            });
            ```
    *   **Error Handling for Validation:** Mongoose validation errors are caught in the `catch` block of your `async/await` structure. They typically have `error.name === 'ValidationError'`.
        ```javascript
        // In Express error handling or route catch block
        try {
          // ... mongoose operation ...
        } catch (error) {
          if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
          }
          if (error.code === 11000) { // MongoDB duplicate key error (for unique: true)
            return res.status(400).json({ success: false, error: 'Duplicate field value entered.' });
          }
          res.status(500).json({ success: false, error: 'Server Error' });
        }
        ```
*   **Modeling Relationships in MongoDB**
    *   MongoDB is a NoSQL database, so it doesn't have built-in "joins" like relational databases. Relationships are modeled either by **embedding (denormalization)** or **referencing (normalization)**.
    *   **When to Embed (Denormalization):**
        *   One-to-one relationships where child data is tightly coupled to the parent.
        *   One-to-many relationships where the "many" side is limited in number and rarely queried independently.
        *   Data that is frequently accessed together.
        *   **Pros:** Fewer queries (single read for all related data), better performance for read-heavy operations, atomicity (single document update).
        *   **Cons:** Data duplication, difficulty updating embedded data, document size limits (16MB per document).
        *   **Example: User with embedded address**
            ```javascript
            // models/User.js
            const userSchema = new mongoose.Schema({
              name: String,
              email: String,
              address: { // Embedded document
                street: String,
                city: String,
                zip: String
              }
            });
            ```
            ```json
            // Document example
            {
              "name": "Jane Doe",
              "email": "jane@example.com",
              "address": { "street": "456 Oak Ave", "city": "Treeland", "zip": "12345" }
            }
            ```
    *   **When to Reference (Normalization):**
        *   One-to-many or Many-to-many relationships where the "many" side can be very large.
        *   Data that needs to be queried independently.
        *   When data needs to be updated frequently across multiple relationships.
        *   **Pros:** No data duplication, flexible relationships, avoids document size limits.
        *   **Cons:** Requires multiple queries (`populate()`) to retrieve related data (similar to joins), less atomic updates.
        *   **Example: Post referencing User (One-to-Many, User has many Posts)**
            *   `models/User.js` (No change from above, just a simple user)
            *   `models/Post.js`:
                ```javascript
                const mongoose = require('mongoose');
                const Schema = mongoose.Schema;

                const postSchema = new mongoose.Schema({
                  title: String,
                  content: String,
                  // Reference to the User model's ObjectId
                  author: {
                    type: Schema.Types.ObjectId, // Specifies that this field holds an ObjectId
                    ref: 'User', // Refers to the 'User' model
                    required: true
                  },
                  createdAt: {
                    type: Date,
                    default: Date.now
                  }
                });

                module.exports = mongoose.model('Post', postSchema);
                ```
            *   **Documents Example:**
                ```json
                // User document
                { "_id": ObjectId("USER_ID_1"), "name": "John Doe", "email": "john@example.com" }

                // Post document
                {
                  "_id": ObjectId("POST_ID_1"),
                  "title": "My First Blog Post",
                  "content": "This is the content of my post...",
                  "author": ObjectId("USER_ID_1") // Stores the _id of the author
                }
                ```
        *   **`populate()` Method (Mongoose "Joins"):**
            *   Mongoose provides the `populate()` method to automatically replace the specified paths in the document with actual documents from other collections. This mimics a join.
            *   **Example:**
                ```javascript
                // In an Express route handler (e.g., GET /api/posts/:id)
                // ...
                const Post = require('../models/Post');
                try {
                  // Find a post and "populate" the 'author' field with the actual User document
                  const post = await Post.findById(req.params.id).populate('author');
                  if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                  }
                  console.log(post.author.name); // Now you can access author's name
                  res.status(200).json(post);
                } catch (error) {
                  res.status(500).json({ message: error.message });
                }
                ```
*   **Exercise: Model a Blog with Relationships**
    1.  Continue with your `user-api-mongoose` project.
    2.  Modify your `User` schema to include an embedded `profile` object with fields like `bio` (String) and `website` (String).
    3.  Create a new `models/Comment.js` schema and model. A `Comment` should have `text` (String), `author` (String), and `createdAt` (Date).
    4.  Create a new `models/BlogPost.js` schema and model. A `BlogPost` should have:
        *   `title` (String, required)
        *   `content` (String, required)
        *   `author` (reference to `User` model using `ObjectId` and `ref: 'User'`)
        *   `comments` (an array of embedded `Comment` documents - not references, demonstrate embedding for comments directly related to a post).
        *   `tags` (array of Strings)
        *   `createdAt`, `updatedAt` (use `timestamps: true`).
    5.  In your Express app (`server.js` or a new router file `blogRoutes.js`):
        *   Implement a `POST /api/blogposts` endpoint to create a new blog post. When creating, link it to an existing User's `_id`.
        *   Implement a `GET /api/blogposts/:id` endpoint that retrieves a blog post and populates the `author` field.
        *   Implement a `POST /api/blogposts/:id/comments` endpoint to add a new embedded comment to a blog post.
    6.  Test these new endpoints with Postman, observing how relationships are stored and retrieved.

### Helpful Links:

*   [MongoDB Data Modeling Introduction](https://www.mongodb.com/basics/data-modeling)
*   [Mongoose Population](https://mongoosejs.com/docs/populate.html)
*   [MongoDB Data Model Design (MongoDB Docs)](https://docs.mongodb.com/manual/core/data-model-design/)
