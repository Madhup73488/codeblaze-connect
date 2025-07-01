### Lesson 6.2: Selecting DOM Elements
<p>To manipulate an element, you must first select it. The modern way uses CSS selectors:</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><code class="prose-inline-code">document.querySelector(selector)</code>: Returns the <strong>first</strong> element that matches the selector.</li>
    <li><code class="prose-inline-code">document.querySelectorAll(selector)</code>: Returns a <strong>NodeList</strong> (which is like an array) of all elements that match the selector.</li>
</ul>
<pre class="prose-code-block">// Select by ID
const main = document.querySelector('#main-content');

// Select by class
const items = document.querySelectorAll('.list-item');

// Loop over the selected items
items.forEach(item => {
  console.log(item.textContent);
});</pre>
