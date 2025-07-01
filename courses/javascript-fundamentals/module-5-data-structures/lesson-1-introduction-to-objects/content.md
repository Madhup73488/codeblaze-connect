### Lesson 5.1: Introduction to Objects
<p>An object is a collection of key-value pairs. It's the most fundamental data structure in JavaScript.</p>
<pre class="prose-code-block">const person = {
  name: "Alice",
  age: 30,
  "home city": "New York"
};</pre>
<p>Properties are accessed using:</p>
<ul class="list-disc list-inside">
    <li><strong>Dot notation:</strong> <code class="prose-inline-code">person.name</code></li>
    <li><strong>Bracket notation:</strong> <code class="prose-inline-code">person['age']</code> (required for keys with spaces or when the key is a variable)</li>
</ul>
<p>You can add, modify, and delete properties dynamically.</p>
<pre class="prose-code-block">person.job = "Developer"; // Add property
person.age = 31;          // Modify property
delete person.job;     // Delete property</pre>
