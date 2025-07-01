### Lesson 3.2: The `switch` Statement
<p>A <code class="prose-inline-code">switch</code> statement is a cleaner alternative to a long <code class="prose-inline-code">if...else if</code> chain when checking a single variable against multiple values. It uses strict comparison (<code class="prose-inline-code">===</code>).</p>
<pre class="prose-code-block">let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Bananas are yellow.");
    break; // The 'break' is crucial!
  case "Apple":
    console.log("Apples can be red or green.");
    break;
  default:
    console.log("Sorry, we are out of that fruit.");
}
</pre>
<p>Without <code class="prose-inline-code">break</code>, execution "falls through" to the next case.</p>
