### Module 5: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: The Reading List</h5>
    <p><strong>Task:</strong> Create an array of objects, where each object describes a book and has properties for <code class="prose-inline-code">title</code> (string), <code class="prose-inline-code">author</code> (string), and <code class="prose-inline-code">isRead</code> (boolean).</p>
    <p>Write a loop that iterates over the array of books. For each book, log the book title and author to the console. If the book has been read, add "(Read)" to the end of the string.</p>
    <pre class="prose-code-block">// Example Output:
// The Hobbit by J.R.R. Tolkien
// The Lord of the Rings by J.R.R. Tolkien (Read)</pre>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Get Full Names</h5>
    <p><strong>Task:</strong> You have an array of user objects, each with <code class="prose-inline-code">firstName</code> and <code class="prose-inline-code">lastName</code> properties. Use the <code class="prose-inline-code">.map()</code> method to create a new array containing the full names of the users (e.g., "Alice Smith").</p>
    <pre class="prose-code-block">const users = [
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
];</pre>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Filter Expensive Products</h5>
    <p><strong>Task:</strong> You have an array of product objects, each with <code class="prose-inline-code">name</code> and <code class="prose-inline-code">price</code> properties. Use the <code class="prose-inline-code">.filter()</code> method to create a new array containing only the products that cost 100 or more.</p>
    <pre class="prose-code-block">const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 100 },
  { name: 'Monitor', price: 350 }
];</pre>
</div>
