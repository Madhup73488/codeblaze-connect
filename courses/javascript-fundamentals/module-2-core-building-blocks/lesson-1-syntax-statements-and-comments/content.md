### Lesson 2.1: Syntax, Statements, and Comments
<p>JavaScript, like any language, has a set of grammatical rules that dictate how code must be written to be understood by the engine. Mastering this syntax is the first step toward writing functional code.</p>

<h4>Core Syntax Rules</h4>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>Case Sensitivity:</strong> JavaScript is strictly case-sensitive. This means that variable names, function names, and operators are treated differently based on their capitalization. For example, <code class="prose-inline-code">myVariable</code>, <code class="prose-inline-code">MyVariable</code>, and <code class="prose-inline-code">myvariable</code> would be considered three distinct variables.</li>
    <li><strong>Whitespace:</strong> JavaScript largely ignores extra whitespace (spaces, tabs, newlines). This allows you to format your code for readability.</li>
    <li><strong>Statements:</strong> A JavaScript program is a sequence of instructions called statements. Each statement tells the computer to perform an action. It's a strong convention and best practice to terminate each statement with a semicolon (<code class="prose-inline-code">;</code>). While JavaScript has Automatic Semicolon Insertion (ASI), relying on it can lead to subtle and hard-to-debug errors.</li>
</ul>

<h4>Comments</h4>
<p>Comments are crucial for explaining what your code does. The JavaScript engine ignores them completely.</p>
<pre class="prose-code-block">// This is a single-line comment.
let x = 10; // This comment explains the purpose of the variable.

/*
  This is a multi-line comment.
  It is useful for longer explanations or for temporarily
  disabling a block of code.
*/</pre>
