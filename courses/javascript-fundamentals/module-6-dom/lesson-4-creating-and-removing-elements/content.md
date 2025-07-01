### Lesson 6.4: Creating and Removing Elements
<p>You can create elements in memory and add them to the page.</p>
<pre class="prose-code-block">// 1. Create the element
const newParagraph = document.createElement('p');
newParagraph.textContent = "This paragraph was added by JS.";

// 2. Find a parent and append it
const container = document.querySelector('.container');
container.appendChild(newParagraph);

// To remove an element
newParagraph.remove();</pre>
