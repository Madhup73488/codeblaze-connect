### Lesson 6.3: Manipulating DOM Elements
<p>Once selected, you can change an element's content and attributes.</p>
<h4>Changing Content</h4>
<p>Use <code class="prose-inline-code">.textContent</code> for plain text and <code class="prose-inline-code">.innerHTML</code> to insert HTML markup. <strong>Be careful with <code class="prose-inline-code">.innerHTML</code></strong> as it can be a security risk if used with untrusted user input.</p>
<pre class="prose-code-block">const heading = document.querySelector('h1');
heading.textContent = "New Title"; // Safe for text
// heading.innerHTML = "<span>New Title</span>"; // Use when you need to add HTML</pre>
<h4>Changing Attributes</h4>
<p>Use <code class="prose-inline-code">setAttribute</code> and <code class="prose-inline-code">getAttribute</code>.</p>
<pre class="prose-code-block">const link = document.querySelector('a');
link.setAttribute('href', 'https://www.example.com');</pre>
