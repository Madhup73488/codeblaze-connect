### Module 1: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: Basic Setup</h5>
    <p><strong>Task:</strong></p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Create an HTML file named <code class="prose-inline-code">index.html</code>.</li>
        <li>Create a JavaScript file named <code class="prose-inline-code">app.js</code> in the same directory.</li>
        <li>In <code class="prose-inline-code">index.html</code>, set up a basic HTML structure with a <code class="prose-inline-code"><h1></code> tag that says "My First Web Page".</li>
        <li>Link your <code class="prose-inline-code">app.js</code> file to your <code class="prose-inline-code">index.html</code> file using the modern <code class="prose-inline-code">defer</code> attribute in the <code class="prose-inline-code"><head></code>.</li>
        <li>In <code class="prose-inline-code">app.js</code>, write a single line of code that logs the message "Script loaded successfully!" to the console.</li>
        <li>Open <code class="prose-inline-code">index.html</code> in your browser and verify the message appears in the developer console.</li>
    </ol>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Using `alert` and `console.log`</h5>
    <p><strong>Task:</strong> In your existing <code class="prose-inline-code">app.js</code> file:</p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Create an <code class="prose-inline-code">alert()</code> that displays the message: "Welcome to my website!".</li>
        <li>On the next line, use <code class="prose-inline-code">console.log()</code> to print the message "This is a message for developers."</li>
        <li>On another line, use <code class="prose-inline-code">console.log()</code> to print the result of the calculation <code class="prose-inline-code">5 * 7</code>.</li>
    </ol>
    <p><strong>Question:</strong> When you reload the page, in what order do these things happen? Why?</p>
    <p><strong>Answer:</strong> The <code class="prose-inline-code">alert</code> appears first and pauses everything. Only after you click "OK" does the script continue, and the two messages are logged to the console.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Conceptual Questions</h5>
    <p><strong>Task:</strong> Answer the following questions in your own words.</p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>What is the difference between JavaScript and ECMAScript?</li>
        <li>Why is it generally a bad idea to put your <code class="prose-inline-code"><script></code> tags in the <code class="prose-inline-code"><head></code> without the <code class="prose-inline-code">defer</code> attribute?</li>
        <li>Explain the "house analogy" for HTML, CSS, and JavaScript.</li>
    </ol>
</div>
