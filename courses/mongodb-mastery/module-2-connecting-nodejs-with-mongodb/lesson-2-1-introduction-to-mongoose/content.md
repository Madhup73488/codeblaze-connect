# Lesson 2.1: Introduction to Mongoose (ODM)

*   **What is an ODM/ORM?**
    *   **ODM (Object-Document Mapper):** A library that helps you interact with NoSQL document databases (like MongoDB) using an object-oriented approach. It maps database documents to JavaScript objects. Mongoose is a popular ODM for MongoDB in Node.js.
    *   **ORM (Object-Relational Mapper):** A library that helps you interact with relational databases (SQL) using an object-oriented approach. It maps database tables to objects. (e.g., Sequelize for SQL databases).
    *   **Why use an ODM?**
        *   **Schema Enforcement (Optional but Powerful):** While MongoDB itself is schema-less, Mongoose allows you to define schemas for your collections, providing data validation and structure at the application level. This helps ensure data consistency.
        *   **Code Organization:** Provides a structured way to define data models.
        *   **Convenience Methods:** Offers powerful methods for CRUD operations, validation, middleware, and query building, abstracting away raw driver commands.
        *   **Type Casting:** Automatically converts data types between JavaScript and MongoDB BSON.
*   **Setting up Mongoose in a Node.js Project**
    1.  **Initialize Project:** (If not already done)
        ```bash
        mkdir mongoose-app
        cd mongoose-app
        npm init -y
        ```
    2.  **Install Mongoose:**
        ```bash
        npm install mongoose dotenv # dotenv for environment variables
        ```
    3.  **Create `.env` file:** (for MongoDB URI)
        ```
        MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
        ```
        Remember to replace placeholders with your actual Atlas or local credentials.
    4.  **Connect to MongoDB using Mongoose:**
        *   `db.js` (or `config/db.js` - good practice to separate concerns):
            ```javascript
            // config/db.js
            require('dotenv').config(); // Load environment variables from .env
            const mongoose = require('mongoose');

            const connectDB = async () => {
              try {
                const conn = await mongoose.connect(process.env.MONGODB_URI);
                console.log(`MongoDB Connected: ${conn.connection.host}`);
              } catch (error) {
                console.error(`Error: ${error.message}`);
                process.exit(1); // Exit process with failure
              }
            };

            module.exports = connectDB;
            ```
        *   `server.js` (Main application file):
            ```javascript
            // server.js
            const connectDB = require('./config/db'); // Import connection function

            // Call connectDB to establish connection
            connectDB();

            // Your Express app setup will go here later
            // const express = require('express');
            // const app = express();
            // ...
            // app.listen(...)
            console.log("Server setup continues..."); // Placeholder for actual server start
            ```
    *   **Run and Verify:**
        ```bash
        node server.js
        ```
        You should see `MongoDB Connected: ...` in your console.
*   **Defining Mongoose Schemas**
    *   A Mongoose Schema defines the structure of the documents within a collection, default values, validators, and relationships. It is like a blueprint.
    *   **Basic Schema Types:** `String`, `Number`, `Boolean`, `Date`, `Buffer`, `Mixed`, `ObjectId`, `Array`, `Decimal128`, `Map`.
    *   **Validation:** Built-in validators (`required`, `min`, `max`, `enum`, `match` for regex), custom validators.
    *   **Default Values:** Set default values for fields.
    *   **Schema Options:** `timestamps` (adds `createdAt` and `updatedAt` fields automatically).
    *   **Detailed Example:**
        ```javascript
        // models/Product.js
        const mongoose = require('mongoose');

        const productSchema = mongoose.Schema(
          {
            name: {
              type: String,
              required: [true, 'Product name is required'], // Custom error message
              trim: true, // Remove whitespace from both ends of a string
              unique: true, // Ensures unique values for this field
              minlength: [3, 'Product name must be at least 3 characters long']
            },
            price: {
              type: Number,
              required: true,
              min: [0, 'Price cannot be negative']
            },
            category: {
              type: String,
              enum: ['Electronics', 'Books', 'Home & Kitchen', 'Apparel'], // Only allowed values
              default: 'Electronics'
            },
            inStock: {
              type: Boolean,
              default: true
            },
            tags: {
              type: [String] // Array of strings
            },
            description: String // Shorthand for { type: String }
          },
          {
            timestamps: true // Automatically adds createdAt and updatedAt fields
          }
        );

        // Export the model, which allows you to interact with the 'products' collection
        module.exports = mongoose.model('Product', productSchema);
        ```
*   **Creating Mongoose Models**
    *   A Mongoose Model is a class constructed from a Schema. It allows you to interact with the database (query, create, update, delete documents).
    *   `mongoose.model('<ModelName>', <schema>)`: Compiles the schema into a model. Mongoose automatically pluralizes the model name to find the collection (e.g., `Product` model maps to `products` collection).
*   **Exercise: Connect and Define a User Schema**
    1.  Create a new Node.js project `user-api-mongoose`.
    2.  Install `mongoose` and `dotenv`.
    3.  Create a `.env` file and add your MongoDB connection URI.
    4.  Create a `config/db.js` file for your database connection logic.
    5.  In your main `server.js` file, call the `connectDB` function.
    6.  Create a `models/User.js` file.
    7.  Define a Mongoose Schema for a `User`. It should include:
        *   `username` (String, required, unique, trim)
        *   `email` (String, required, unique, match for email regex)
        *   `password` (String, required, minlength)
        *   `age` (Number, min, max, optional)
        *   `isAdmin` (Boolean, default: false)
        *   Add `timestamps: true` to the schema options.
    8.  Export the `User` model from `models/User.js`.
    9.  Run `server.js` to ensure the database connection is successful.

### Helpful Links:

*   [Mongoose Official Documentation](https://mongoosejs.com/docs/guide.html)
*   [Mongoose Schema Basics](https://mongoosejs.com/docs/schematypes.html)
*   [Mongoose Validation](https://mongoosejs.com/docs/validation.html)
*   [dotenv npm package](https://www.npmjs.com/package/dotenv)
