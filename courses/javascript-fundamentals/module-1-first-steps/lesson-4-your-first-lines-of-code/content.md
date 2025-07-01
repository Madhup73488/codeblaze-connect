### Lesson 1.4: Your First Lines of Code: Setup and The Console
<p>With a conceptual understanding of what JavaScript is and how it works, it's time to write your first lines of code. There are two primary ways to include JavaScript on a webpage, and both involve the <code class="prose-inline-code"><script></code> HTML tag.</p>

<h4>Adding JavaScript to an HTML Page</h4>
<ol class="list-decimal list-inside space-y-2 my-4">
    <li><strong>Internal JavaScript:</strong> You can write JavaScript code directly within your HTML file by placing it inside <code class="prose-inline-code"><script></code> and <code class="prose-inline-code"></script></code> tags. This is suitable for very small scripts or quick testing.</li>
    <li><strong>External JavaScript:</strong> The most common and recommended practice is to place your JavaScript code in a separate file with a <code class="prose-inline-code">.js</code> extension. You then link to this file from your HTML using the <code class="prose-inline-code">src</code> (source) attribute in the <code class="prose-inline-code"><script></code> tag. This approach promotes <strong>separation of concerns</strong>, keeping your structure (HTML), style (CSS), and behavior (JS) in different files.</li>
</ol>

<h4>Where to Place the <code class="prose-inline-code"><script></code> Tag</h4>
<p>The placement of the <code class="prose-inline-code"><script></code> tag can impact how your page loads.</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>In the <code class="prose-inline-code"><head></code> (with <code class="prose-inline-code">defer</code>):</strong> The modern best practice is <code class="prose-inline-code"><script src="app.js" defer></script></code>. The <code class="prose-inline-code">defer</code> attribute tells the browser to download the script in parallel with parsing the HTML, but to *defer* execution until after the HTML parsing is complete. This is non-blocking and efficient.</li>
    <li><strong>At the end of the <code class="prose-inline-code"><body></code>:</strong> The traditional method. This allows the browser to render all HTML content first, so the user sees the page quickly.</li>
</ul>

<h4>The Developer Console</h4>
<p>The most essential tool for any JavaScript developer is the browser's built-in <strong>developer console</strong>. It is a command-line interface that allows you to execute JavaScript snippets directly, view logged messages, and debug your code.</p>
<p><strong>How to Open:</strong> Right-click anywhere on a webpage, select "Inspect," and then click on the "Console" tab.</p>

<h4>"Hello, World!"</h4>
<p>It's a time-honored tradition to start with a "Hello, World!" program. In JavaScript, you can do this in a few ways.</p>
<ol class="list-decimal list-inside space-y-2 my-4">
    <li><strong>Using <code class="prose-inline-code">console.log()</code>:</strong> This is the primary method for debugging. It prints a message to the developer console, visible to the developer but not to the end-user.</li>
    <pre class="prose-code-block">console.log("Hello, World!");</pre>
    <li><strong>Using <code class="prose-inline-code">alert()</code>:</strong> This function displays a pop-up dialog box to the user. It's useful for simple notifications but should be used sparingly as it is intrusive and blocks all other interaction with the page until dismissed.</li>
    <pre class="prose-code-block">alert("Hello from an alert box!");</pre>
</ol>
