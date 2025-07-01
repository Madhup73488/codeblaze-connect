### Module 6: Exercises & Problems
<p>For these exercises, you will need an HTML file linked to a JS file. Create a simple HTML structure to work with, for example:</p>
<pre class="prose-code-block"><h1 id="main-heading">My Awesome Page</h1>
<button id="change-btn">Change Color</button>
<div id="container"></div></pre>
<div class="exercise-section">
    <h5>Exercise 1: Simple Click Counter</h5>
    <p><strong>Task:</strong> In your HTML, add a button and a paragraph. When the button is clicked, the text in the paragraph should update to show how many times the button has been clicked. For example: "Button clicked 1 time(s)".</p>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Simple To-Do List</h5>
    <p><strong>Task:</strong> Create a simple to-do list application.</p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Add a text input field, a button ("Add Task"), and an unordered list (<code class="prose-inline-code"><ul></code>) to your HTML.</li>
        <li>When the button is clicked, get the text from the input field.</li>
        <li>Create a new list item (<code class="prose-inline-code"><li></code>) element, set its <code class="prose-inline-code">textContent</code> to the input's text, and append it to the unordered list.</li>
        <li>Clear the input field after adding the task.</li>
        <li><strong>Bonus:</strong> Add a 'click' event listener to the <code class="prose-inline-code"><ul></code> itself. When a <code class="prose-inline-code"><li></code> inside it is clicked, toggle a class on it to mark it as "completed" (e.g., with a line-through style). This is an example of event delegation.</li>
    </ol>
</div>
