### Lesson 7.4: `async` and `await`: The Modern Standard
<p><code class="prose-inline-code">async/await</code> is modern syntactic sugar on top of Promises, allowing you to write async code that looks synchronous.</p>
<ul class="list-disc list-inside">
    <li>An <code class="prose-inline-code">async</code> function always returns a promise.</li>
    <li>The <code class="prose-inline-code">await</code> keyword can only be used inside an <code class="prose-inline-code">async</code> function. It pauses the function execution and waits for a promise to resolve, then returns its value.</li>
</ul>
<p>Error handling is done with a standard <code class="prose-inline-code">try...catch</code> block.</p>
<pre class="prose-code-block">async function fetchData() {
  try {
    console.log("Fetching data...");
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

fetchData();</pre>
