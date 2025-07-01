### Lesson 2.2: Variables: Storing Your Data
<p>Variables are named containers for storing data. Think of them as labeled boxes where you can keep information your program needs to remember and use later. In modern JavaScript, there are three keywords for declaring variables: <code class="prose-inline-code">let</code>, <code class="prose-inline-code">const</code>, and the older <code class="prose-inline-code">var</code>.</p>

<h4><code>let</code>, <code>const</code>, and <code>var</code></h4>
<div class="overflow-x-auto">
    <table class="w-full text-left border-collapse">
        <thead>
            <tr><th class="border p-2 bg-gray-100">Feature</th><th class="border p-2 bg-gray-100"><code>let</code></th><th class="border p-2 bg-gray-100"><code>const</code></th><th class="border p-2 bg-gray-100"><code>var</code> (Legacy)</th></tr>
        </thead>
        <tbody>
            <tr><td class="border p-2 font-semibold">Scope</td><td class="border p-2">Block Scoped <code class="prose-inline-code">{}</code></td><td class="border p-2">Block Scoped <code class="prose-inline-code">{}</code></td><td class="border p-2">Function Scoped</td></tr>
            <tr><td class="border p-2 font-semibold">Reassignment</td><td class="border p-2">Allowed</td><td class="border p-2"><strong>Not Allowed</strong></td><td class="border p-2">Allowed</td></tr>
            <tr><td class="border p-2 font-semibold">Redeclaration</td><td class="border p-2">Not Allowed in same scope</td><td class="border p-2">Not Allowed in same scope</td><td class="border p-2">Allowed</td></tr>
            <tr><td class="border p-2 font-semibold">Hoisting</td><td class="border p-2">Hoisted, but in TDZ</td><td class="border p-2">Hoisted, but in TDZ</td><td class="border p-2">Hoisted and initialized as <code class="prose-inline-code">undefined</code></td></tr>
        </tbody>
    </table>
</div>

<h5 class="mt-6">Best Practice: Prefer `const` over `let`</h5>
<p>Start by declaring all your variables with <code class="prose-inline-code">const</code>. This prevents accidental reassignment. Only switch to <code class="prose-inline-code">let</code> if you know the variable's value needs to change, such as a loop counter. Avoid using <code class="prose-inline-code">var</code> in modern codebases.</p>

<h5>Example Problem: Variable Scope</h5>
<p><strong>Problem:</strong> Predict the output of the following code and explain why.</p>
<pre class="prose-code-block">let price = 100;
if (price > 50) {
  let discount = price * 0.1;
  console.log(`Discount inside block: \${discount}`); // What prints here?
}
// console.log(`Discount outside block: \${discount}`); // What happens if you uncomment this line?</pre>
<p><strong>Solution:</strong></p>
<ol class="list-decimal list-inside">
    <li>The first console log will print "Discount inside block: 10".</li>
    <li>If you uncomment the second line, you will get a <code class="prose-inline-code">ReferenceError</code>. This is because <code class="prose-inline-code">discount</code> was declared with <code class="prose-inline-code">let</code> and is block-scoped, meaning it only exists inside the <code class="prose-inline-code">if</code> statement's curly braces.</li>
</ol>
