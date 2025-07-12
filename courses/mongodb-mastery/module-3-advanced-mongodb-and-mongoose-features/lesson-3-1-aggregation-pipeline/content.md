# Lesson 3.1: Aggregation Pipeline

*   **Introduction to Aggregation:**
    *   The Aggregation Framework in MongoDB allows you to process data records and return computed results. It's similar to `GROUP BY` clauses and complex analytics queries in SQL.
    *   It uses a "pipeline" concept, where documents pass through various stages, each performing a specific data processing operation.
    *   **Common Use Cases:** Reporting, analytics, real-time dashboards, data transformation.
*   **Aggregation Pipeline Stages (Common Ones):**
    *   `$match`: Filters documents (like `db.collection.find()`).
    *   `$project`: Reshapes documents; includes, excludes, or renames fields (like `db.collection.find({}, { projection: ... })`).
    *   `$group`: Groups documents by a specified key and performs aggregate functions (e.g., `sum`, `avg`, `min`, `max`, `count`).
    *   `$sort`: Sorts documents.
    *   `$limit`: Limits the number of documents.
    *   `$skip`: Skips a number of documents.
    *   `$unwind`: Deconstructs an array field from the input documents to output a document for each element.
    *   `$lookup`: Performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection for processing. (Simulates joins across collections).
    *   `$addFields`: Adds new fields to documents.
    *   `$out`: Writes the aggregated results to a new collection.
*   **Detailed Example: Product Sales Report**
    *   **Sample Data (insert into `db.orders` collection):**
        ```json
        [
          { "orderId": 1, "product": "Laptop", "quantity": 1, "price": 1200, "date": ISODate("2024-01-10T00:00:00Z") },
          { "orderId": 2, "product": "Keyboard", "quantity": 2, "price": 90, "date": ISODate("2024-01-15T00:00:00Z") },
          { "orderId": 3, "product": "Laptop", "quantity": 1, "price": 1200, "date": ISODate("2024-02-01T00:00:00Z") },
          { "orderId": 4, "product": "Mouse", "quantity": 3, "price": 25, "date": ISODate("2024-02-05T00:00:00Z") },
          { "orderId": 5, "product": "Keyboard", "quantity": 1, "price": 90, "date": ISODate("2024-03-01T00:00:00Z") }
        ]
        ```
    *   **Aggregation Query (Shell or Mongoose `Model.aggregate()`):**
        ```javascript
        // Goal: Get total sales and count of items for each product, sorted by total sales
        db.orders.aggregate([
          {
            $match: {
              date: { $gte: ISODate("2024-01-01T00:00:00Z"), $lt: ISODate("2024-04-01T00:00:00Z") }
            }
          },
          {
            $group: {
              _id: "$product", // Group by the 'product' field
              totalQuantitySold: { $sum: "$quantity" }, // Calculate sum of 'quantity'
              totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }, // Calculate total price
              numOrders: { $sum: 1 } // Count documents in each group
            }
          },
          {
            $sort: { totalRevenue: -1 } // Sort by totalRevenue descending
          },
          {
            $project: { // Reshape output documents
              _id: 0, // Exclude _id
              productName: "$_id", // Rename _id to productName
              totalQuantitySold: 1,
              totalRevenue: 1,
              numOrders: 1
            }
          }
        ])
        ```
    *   **Expected Output:**
        ```json
        [
          { "productName": "Laptop", "totalQuantitySold": 2, "totalRevenue": 2400, "numOrders": 2 },
          { "productName": "Keyboard", "totalQuantitySold": 3, "totalRevenue": 270, "numOrders": 2 },
          { "productName": "Mouse", "totalQuantitySold": 3, "totalRevenue": 75, "numOrders": 1 }
        ]
        ```
*   **Aggregation with Mongoose**
    *   `Model.aggregate(<pipeline_array>)`
    *   **Example (same as above, in Node.js):**
        ```javascript
        // In an Express route handler
        const Order = require('../models/Order'); // Assuming you have an Order model

        app.get('/api/sales-report', async (req, res) => {
          try {
            const report = await Order.aggregate([
              {
                $match: {
                  date: { $gte: new Date('2024-01-01'), $lt: new Date('2024-04-01') }
                }
              },
              {
                $group: {
                  _id: "$product",
                  totalQuantitySold: { $sum: "$quantity" },
                  totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
                  numOrders: { $sum: 1 }
                }
              },
              {
                $sort: { totalRevenue: -1 }
              },
              {
                $project: {
                  _id: 0,
                  productName: "$_id",
                  totalQuantitySold: 1,
                  totalRevenue: 1,
                  numOrders: 1
                }
              }
            ]);
            res.status(200).json(report);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
        });
        ```
*   **Exercise: User Activity Report**
    1.  Assume you have a `users` collection and a `logins` collection (each login document has `userId`, `timestamp`, `device`).
    2.  Write an aggregation pipeline (first in shell, then in Mongoose) to answer the following questions:
        *   **Total Logins per User:** Group by `userId`, count total logins.
        *   **Average Logins per Day (for a specific user):** Filter by `userId`, group by day, then calculate the average.
        *   **Top 5 Most Active Users (by login count):** Group by `userId`, count logins, sort by count descending, limit to 5.
        *   **Number of Logins by Device Type:** Group by `device`, count logins.
    3.  If you have a `User` model, try to `$lookup` (join) the user details into the top 5 active users report to show user names instead of just IDs.

### Helpful Links:

*   [MongoDB Aggregation Framework (Official Docs)](https://docs.mongodb.com/manual/aggregation/)
*   [MongoDB Aggregation Pipeline Stages (Official Docs)](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)
*   [Mongoose Aggregation](https://mongoosejs.com/docs/api/aggregate.html)
*   [MongoDB Aggregation Tutorial (freeCodeCamp)](https://www.freecodecamp.org/news/mongodb-aggregation-tutorial/)
