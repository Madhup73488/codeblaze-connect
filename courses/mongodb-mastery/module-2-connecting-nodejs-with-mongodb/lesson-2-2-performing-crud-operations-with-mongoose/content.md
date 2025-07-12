# Lesson 2.2: Performing CRUD Operations with Mongoose

*   **Integrating Mongoose with Express.js**
    *   You'll use your Mongoose models within your Express route handlers to perform database operations.
*   **CRUD Operations with Mongoose Models**
    *   All Mongoose operations return Promises, so you'll typically use `async/await` to handle them.
    1.  **CREATE (Insert Documents)**
        *   `Model.create(<document_data>)`: A convenient way to create and save a new document.
        *   `new Model(<document_data>).save()`: Create an instance, then save it.
        *   **Example (Creating a Product):**
            ```javascript
            // In an Express route handler (e.g., POST /api/products)
            const Product = require('../models/Product'); // Import the Product model

            // ... inside app.post('/api/products', async (req, res) => { ...
            try {
              const { name, price, category, inStock, tags } = req.body;
              const newProduct = await Product.create({
                name,
                price,
                category,
                inStock,
                tags
              });
              res.status(201).json(newProduct);
            } catch (error) {
              // Mongoose validation errors will be caught here
              res.status(400).json({ message: error.message });
            }
            ```
    2.  **READ (Query Documents)**
        *   `Model.find(<filter_object>, <projection_object>)`: Finds multiple documents.
        *   `Model.findOne(<filter_object>, <projection_object>)`: Finds a single document.
        *   `Model.findById(<id_string>)`: Finds a document by its `_id`.
        *   **Query Chaining (Chainable Query Builder Methods):**
            *   `.sort({ field: 1/-1 })`
            *   `.limit(<number>)`
            *   `.skip(<number>)`
            *   `.select('field1 field2 -field3')`: Include/exclude fields.
            *   **Example (Reading Products):**
                ```javascript
                // GET /api/products (get all, with optional filtering/sorting)
                // ... inside app.get('/api/products', async (req, res) => { ...
                try {
                  const { category, inStock, sortBy, limit, skip } = req.query; // Get query params

                  let filter = {};
                  if (category) filter.category = category;
                  if (inStock !== undefined) filter.inStock = inStock === 'true'; // Convert string to boolean

                  let query = Product.find(filter);

                  if (sortBy) query = query.sort(sortBy);
                  if (limit) query = query.limit(parseInt(limit));
                  if (skip) query = query.skip(parseInt(skip));

                  const products = await query;
                  res.status(200).json(products);
                } catch (error) {
                  res.status(500).json({ message: error.message });
                }

                // GET /api/products/:id
                // ... inside app.get('/api/products/:id', async (req, res) => { ...
                try {
                  const product = await Product.findById(req.params.id);
                  if (!product) {
                    return res.status(404).json({ message: 'Product not found' });
                  }
                  res.status(200).json(product);
                } catch (error) {
                  // Mongoose will throw CastError if id format is invalid
                  res.status(400).json({ message: 'Invalid product ID' });
                }
                ```
    3.  **UPDATE (Modify Documents)**
        *   `Model.findByIdAndUpdate(<id>, <update_object>, <options>)`: Finds by ID and updates. Returns the original document by default unless `new: true` option is set.
        *   `Model.findOneAndUpdate(<filter>, <update_object>, <options>)`: Finds by filter and updates.
        *   `Model.updateOne(<filter>, <update_object>, <options>)`: Updates a single document, but doesn't return the modified document by default (returns update result object).
        *   `Model.updateMany(<filter>, <update_object>, <options>)`: Updates multiple documents.
        *   **Important Options:**
            *   `{ new: true }`: Returns the updated document.
            *   `{ runValidators: true }`: Runs schema validators on the update.
        *   **Example (Updating a Product):**
            ```javascript
            // PUT /api/products/:id
            // ... inside app.put('/api/products/:id', async (req, res) => { ...
            try {
              const { name, price, category, inStock, tags } = req.body;
              const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                { name, price, category, inStock, tags },
                { new: true, runValidators: true } // Return updated doc, run validators
              );
              if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
              }
              res.status(200).json(updatedProduct);
            } catch (error) {
              res.status(400).json({ message: error.message });
            }
            ```
    4.  **DELETE (Remove Documents)**
        *   `Model.findByIdAndDelete(<id>)`: Finds by ID and deletes.
        *   `Model.deleteOne(<filter>)`: Deletes a single document matching filter.
        *   `Model.deleteMany(<filter>)`: Deletes multiple documents matching filter.
        *   **Example (Deleting a Product):**
            ```javascript
            // DELETE /api/products/:id
            // ... inside app.delete('/api/products/:id', async (req, res) => { ...
            try {
              const deletedProduct = await Product.findByIdAndDelete(req.params.id);
              if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' });
              }
              res.status(204).send(); // 204 No Content for successful deletion
            } catch (error) {
              res.status(400).json({ message: 'Invalid product ID' });
            }
            ```
*   **Exercise: Build a User REST API with Mongoose**
    1.  Continue with your `user-api-mongoose` project from Lesson 2.1.
    2.  In `server.js`:
        *   Set up Express and its JSON middleware (`app.use(express.json())`).
        *   Create an Express Router (e.g., `userRoutes`).
        *   Import your `User` model.
    3.  Implement the following CRUD endpoints using `async/await` and Mongoose methods:
        *   `GET /api/users`: Get all users.
        *   `GET /api/users/:id`: Get a single user by ID. Handle 404 and invalid ID format.
        *   `POST /api/users`: Create a new user. Apply validation. Return 201 Created. Handle validation errors (e.g., duplicate username/email, minlength).
        *   `PUT /api/users/:id`: Update a user. Ensure validators run. Handle 404 and invalid ID.
        *   `DELETE /api/users/:id`: Delete a user. Return 204 No Content. Handle 404 and invalid ID.
    4.  Mount your `userRoutes` under `/api`.
    5.  Test all endpoints thoroughly using Postman/Insomnia. Pay attention to success and error status codes.

### Helpful Links:

*   [Mongoose Queries](https://mongoosejs.com/docs/queries.html)
*   [Mongoose Models](https://mongoosejs.com/docs/models.html)
*   [Mongoose CRUD Operations Tutorial (Tutorials Point)](https://www.tutorialspoint.com/mongoose/mongoose_crud_operations.htm)
