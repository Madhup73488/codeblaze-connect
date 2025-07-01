### Module 7: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: Simple Delay</h5>
    <p><strong>Task:</strong> Write a function named <code class="prose-inline-code">delayMessage</code> that takes two arguments: a message (string) and a delay time in milliseconds. The function should use <code class="prose-inline-code">setTimeout</code> to log the message to the console after the specified delay.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Fetch User Data</h5>
    <p><strong>Task:</strong> Use the <code class="prose-inline-code">fetch</code> API to get user data from the JSONPlaceholder API. Then, log the name and email of the first user to the console.</p>
    <p>The URL is: <code class="prose-inline-code">https://jsonplaceholder.typicode.com/users/1</code></p>
    <p><strong>Instructions:</strong></p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Use <code class="prose-inline-code">fetch()</code> with the URL.</li>
        <li>Use <code class="prose-inline-code">.then()</code> to handle the response and convert it to JSON using <code class="prose-inline-code">.json()</code>.</li>
        <li>Use another <code class="prose-inline-code">.then()</code> to access the final data and log the required information.</li>
        <li>Add a <code class="prose-inline-code">.catch()</code> block to handle any potential network errors.</li>
    </ol>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Refactor to Async/Await</h5>
    <p><strong>Task:</strong> Take your solution from Exercise 2 and refactor it into a new <code class="prose-inline-code">async</code> function named <code class="prose-inline-code">fetchFirstUser</code>. Use <code class="prose-inline-code">await</code> to handle the promises and a <code class="prose-inline-code">try...catch</code> block for error handling.</p>
</div>
