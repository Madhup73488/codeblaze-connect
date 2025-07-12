# Lesson 1.3: MongoDB Data Model & Basic CRUD Operations (Shell)

*   **MongoDB Data Model (Documents and Collections)**
    *   **Documents:** MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents.
        *   Documents are similar to JSON objects, consisting of field-value pairs.
        *   Values can be various data types, including arrays, other documents (nested), and binary data.
        *   Each document has a unique `_id` field (automatically generated ObjectId if not provided).
        *   **Example Document:**
            ```json
            {
              "_id": ObjectId("60c72b2f9f1b2c001a8b4567"), // Auto-generated
              "name": "Alice Wonderland",
              "email": "alice@example.com",
              "age": 30,
              "interests": ["reading", "hiking", "coding"],
              "address": {
                "street": "123 Main St",
                "city": "Fantasyland",
                "zip": "98765"
              },
              "createdAt": ISODate("2024-06-28T10:00:00Z")
            }
            ```
    *   **Collections:** Groups of documents. They do not enforce a schema, meaning documents within the same collection can have different fields. This "schema-less" nature provides flexibility.
    *   **Databases:** Logical containers for collections.
*   **MongoDB Shell (`mongosh`) Basics**
    *   `mongosh`: The interactive JavaScript shell for MongoDB.
    *   `show dbs`: List all databases.
    *   `use <database_name>`: Switch to (or create) a database.
    *   `db`: Shows the current database.
    *   `show collections`: List all collections in the current database.
*   **CRUD Operations (Create, Read, Update, Delete)**
    *   These are the fundamental operations for interacting with any database.
    1.  **CREATE (Insert Documents)**
        *   `db.collection.insertOne(<document>)`: Inserts a single document.
            ```bash
            use myStoreDb // Switch to or create a database named myStoreDb
            db.products.insertOne({
              name: "Laptop Pro",
              price: 1200,
              category: "Electronics",
              inStock: true,
              tags: ["computer", "electronics"]
            })
            ```
        *   `db.collection.insertMany([<document1>, <document2>, ...])`: Inserts multiple documents.
            ```bash
            db.products.insertMany([
              { name: "Mechanical Keyboard", price: 90, category: "Accessories", inStock: true },
              { name: "Gaming Mouse", price: 60, category: "Accessories", inStock: false },
              { name: "Desk Lamp", price: 35, category: "Home Office", inStock: true }
            ])
            ```
    2.  **READ (Query Documents)**
        *   `db.collection.find(<query_filter>, <projection>)`: Selects documents that match the filter criteria. Returns a cursor.
            *   `query_filter`: An object specifying criteria (empty `{}` for all documents).
            *   `projection`: An object specifying which fields to include/exclude (`{ field: 1 }` to include, `{ field: 0 }` to exclude `_id` is included by default).
        *   `db.collection.findOne(<query_filter>, <projection>)`: Returns the first document that matches the filter.
        *   **Query Operators:**
            *   `$eq`: Equal to.
            *   `$gt`, `$gte`: Greater than, Greater than or equal to.
            *   `$lt`, `$lte`: Less than, Less than or equal to.
            *   `$ne`: Not equal to.
            *   `$in`: Value is in an array.
            *   `$and`, `$or`, `$not`: Logical operators.
            *   `$exists`: Field exists.
            *   `$regex`: Regular expression for string matching.
            *   `$size`: Array size.
            *   `$elemMatch`: Match elements in an array.
            *   **Example Queries:**
                ```bash
                db.products.find({}) // Find all products
                db.products.find({ name: "Laptop Pro" }) // Find by exact name
                db.products.find({ price: { $gt: 50, $lte: 100 } }) // Price between 50 and 100 (inclusive upper bound)
                db.products.find({ category: { $in: ["Electronics", "Accessories"] } }) // Category is Electronics OR Accessories
                db.products.find({ inStock: true, category: "Electronics" }) // AND condition
                db.products.find({ tags: "computer" }) // Find documents where 'tags' array contains "computer"
                db.products.find({ name: { $regex: /^Mech/i } }) // Case-insensitive name starting with "Mech"
                db.products.find({ name: "Laptop Pro" }, { name: 1, price: 1, _id: 0 }) // Only show name and price, exclude _id
                ```
        *   `db.collection.sort(<sort_criteria>)`: Sorts the results (`{ field: 1 }` for ascending, `{ field: -1 }` for descending).
        *   `db.collection.limit(<number>)`: Limits the number of results.
        *   `db.collection.skip(<number>)`: Skips a number of results (for pagination).
            ```bash
            db.products.find().sort({ price: -1 }).limit(2) // Top 2 most expensive products
            db.products.find({}).sort({ name: 1 }).skip(1).limit(2) // Pagination: 2nd page of 2 items, sorted by name
            ```
    3.  **UPDATE (Modify Documents)**
        *   `db.collection.updateOne(<filter>, <update>, <options>)`: Updates a single document.
        *   `db.collection.updateMany(<filter>, <update>, <options>)`: Updates multiple documents.
        *   **Update Operators:**
            *   `$set`: Sets the value of a field.
            *   `$inc`: Increments a numerical value.
            *   `$push`: Appends an element to an array.
            *   `$addToSet`: Adds an element to an array only if it doesn't already exist.
            *   `$unset`: Removes a field.
            *   **Example Updates:**
                ```bash
                db.products.updateOne({ name: "Laptop Pro" }, { $set: { price: 1150, color: "Space Gray" } }) // Update price and add color
                db.products.updateMany({ inStock: true }, { $set: { lastUpdated: new Date() } }) // Set lastUpdated for all in-stock
                db.products.updateOne({ name: "Gaming Mouse" }, { $inc: { price: 5 } }) // Increase price by 5
                db.products.updateOne({ name: "Desk Lamp" }, { $push: { tags: "lighting" } }) // Add "lighting" to tags array
                db.products.updateOne({ name: "Desk Lamp" }, { $unset: { category: "" } }) // Remove category field
                ```
    4.  **DELETE (Remove Documents)**
        *   `db.collection.deleteOne(<filter>)`: Deletes a single document.
        *   `db.collection.deleteMany(<filter>)`: Deletes multiple documents.
            ```bash
            db.products.deleteOne({ name: "Gaming Mouse" }) // Delete one product
            db.products.deleteMany({ inStock: false }) // Delete all out-of-stock products
            db.products.deleteMany({}) // Delete ALL documents in the collection (use with caution!)
            ```
*   **Exercise: Manage a Bookstore Inventory (Shell)**
    1.  Connect to your `mongosh` shell or MongoDB Compass.
    2.  Use the database `bookstoreDB` and a collection `books`.
    3.  **Create:** Insert at least 5 book documents. Each book should have `title`, `author`, `genre` (array), `yearPublished`, and `price` fields. Include at least one book with a nested `publisher` object (`{ name, city }`).
    4.  **Read:**
        *   Find all books by a specific author.
        *   Find all books published after a certain year.
        *   Find all books in the "Fiction" genre that cost less than $20.
        *   Find books with titles containing "history" (case-insensitive) and only project `title` and `author`.
        *   Sort all books by `price` in descending order and limit to 3.
    5.  **Update:**
        *   Update the `price` of a specific book.
        *   Add a new genre to an existing book's `genre` array using `$push`.
        *   Update all books published before 2000 to add a `legacy: true` field.
    6.  **Delete:**
        *   Delete one specific book by its `title`.
        *   Delete all books by a certain author.

### Helpful Links:

*   [MongoDB Manual: Documents](https://docs.mongodb.com/manual/core/document/)
*   [MongoDB Manual: Collections](https://docs.mongodb.com/manual/core/collections/)
*   [MongoDB CRUD Operations Tutorial (MongoDB Docs)](https://docs.mongodb.com/manual/crud/)
*   [MongoDB Query Operators (MongoDB Docs)](https://docs.mongodb.com/manual/reference/operator/query/)
