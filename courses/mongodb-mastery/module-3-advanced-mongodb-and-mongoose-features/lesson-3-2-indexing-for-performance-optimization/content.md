# Lesson 3.2: Indexing for Performance Optimization

*   **What are Indexes?**
    *   Indexes in MongoDB are special data structures that store a small portion of the collection's data in an easy-to-traverse form. They improve the speed of read operations (queries) by reducing the amount of data the database has to scan.
    *   Think of them like the index in a book: instead of reading every page to find a topic, you go to the index, find the page number, and jump directly.
    *   MongoDB uses B-tree indexes by default.
*   **Why Use Indexes?**
    *   **Faster Query Performance:** Significantly speeds up queries, especially on large collections.
    *   **Efficient Sorting:** Improves performance of sort operations.
    *   **Unique Constraints:** Can enforce uniqueness on a field (e.g., for email addresses).
    *   **Replica Set Elections:** Indexes play a role in replica set primary elections.
*   **When to Create Indexes (Best Practices):**
    *   **Fields used in Queries:** Index fields that frequently appear in `find()`, `findOne()`, `$match`, `$sort` operations.
    *   **Fields used in Sorts:** Index fields that are commonly used for sorting query results.
    *   **Unique Fields:** Create unique indexes for fields that must have unique values (e.g., username, email).
    *   **Avoid Over-Indexing:** While indexes speed up reads, they slow down writes (inserts, updates, deletes) because the index itself must also be updated. Each index also consumes disk space and memory. Find a balance.
    *   **Compound Indexes:** For queries that frequently use multiple fields, a compound index (an index on multiple fields) can be more efficient than separate single-field indexes. Order of fields in a compound index matters.
        ```javascript
        db.collection.createIndex({ fieldA: 1, fieldB: -1 })
        ```
*   **Types of Indexes (Brief Mention):**
    *   **Single Field Indexes:** Index on one field.
    *   **Compound Indexes:** Index on multiple fields.
    *   **Unique Indexes:** Enforce uniqueness.
    *   **Text Indexes:** For full-text search.
    *   **Geospatial Indexes:** For location-based queries.
*   **Creating Indexes**
    *   **Shell (`mongosh`):**
        ```bash
        db.collection.createIndex({ <field_name>: <sort_order> }, { <options> })
        // sort_order: 1 for ascending, -1 for descending

        // Single field index (ascending)
        db.products.createIndex({ name: 1 })

        // Unique index
        db.users.createIndex({ email: 1 }, { unique: true })

        // Compound index (email ascending, createdAt descending)
        db.orders.createIndex({ email: 1, createdAt: -1 })
        ```
    *   **Mongoose (`schema.index()`):**
        ```javascript
        // models/User.js
        const userSchema = new mongoose.Schema({
          username: { type: String, required: true, unique: true },
          email: { type: String, required: true, unique: true },
          // ... other fields
        });

        // Define single field indexes
        userSchema.index({ username: 1 });
        userSchema.index({ email: 1 }); // Unique is already handled by the field definition

        // Define a compound index
        userSchema.index({ email: 1, createdAt: -1 });

        module.exports = mongoose.model('User', userSchema);
        ```
        Mongoose will automatically create these indexes when the application connects to MongoDB (it runs `createIndex` in the background).
    *   **Viewing Indexes:**
        *   `db.collection.getIndexes()` (in `mongosh`).
        *   MongoDB Compass GUI.
*   **Analyzing Query Performance (`.explain()`)**
    *   The `.explain()` method helps you understand how MongoDB executes a query, including whether it used an index.
    *   **Shell:**
        ```bash
        db.products.find({ name: "Laptop Pro" }).explain("executionStats")
        // Look for "totalKeysExamined" (number of index entries scanned)
        // and "totalDocsExamined" (number of documents scanned).
        // Ideally, totalKeysExamined should be low, and totalDocsExamined should be equal to or close to the number of returned documents.
        ```
*   **Exercise: Optimize a Product Catalog**
    1.  Assume you have a `products` collection with thousands of documents. Each document has `name`, `category`, `price`, `manufacturer`, `createdAt`, `ratings` fields.
    2.  In `mongosh`, insert at least 100 sample documents (you can use a loop for this).
    3.  Run the following queries and use `.explain("executionStats")` to see their performance **without** any indexes:
        *   `db.products.find({ category: "Electronics" })`
        *   `db.products.find({ manufacturer: "Samsung" }).sort({ price: 1 })`
        *   `db.products.find({ name: /^Gaming/i })`
    4.  Create the following indexes (in `mongosh` or through Mongoose schema index definitions):
        *   A single field index on `category`.
        *   A compound index on `manufacturer` (ascending) and `price` (ascending).
    5.  Rerun the queries from step 3 and use `.explain("executionStats")` again. Compare the `totalKeysExamined` and `totalDocsExamined` values to see the performance improvement.

### Helpful Links:

*   [MongoDB Indexes (Official Docs)](https://docs.mongodb.com/manual/indexes/)
*   [Mongoose Schema Indexes](https://mongoosejs.com/docs/guide.html#indexes)
*   [MongoDB explain() Method](https://docs.mongodb.com/manual/reference/method/cursor.explain/)
*   [MongoDB Indexing Best Practices (MongoDB Blog)](https://www.mongodb.com/blog/post/performance-best-practices-indexing)
