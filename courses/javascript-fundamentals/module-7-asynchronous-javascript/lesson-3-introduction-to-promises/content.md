### Lesson 7.3: Introduction to Promises
<p>A <strong>Promise</strong> is an object representing the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: <strong>pending</strong>, <strong>fulfilled</strong>, or <strong>rejected</strong>.</p>
<p>You consume a promise using the <code class="prose-inline-code">.then()</code> method for success and the <code class="prose-inline-code">.catch()</code> method for failure.</p>
<pre class="prose-code-block">fetch('https://api.example.com/data')
  .then(response => response.json()) // .then() returns a new promise
  .then(data => {
    console.log(data); // This runs when the data is ready
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });</pre>
<p>This chaining of <code class="prose-inline-code">.then()</code> calls solves Callback Hell by creating a flat, readable sequence.</p>
