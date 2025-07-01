### Lesson 3.4: `while` and `do...while` Loops
<p>These loops are used when the number of iterations is unknown.</p>
<h4>while</h4>
<p>The condition is checked <strong>before</strong> each iteration.</p>
<pre class="prose-code-block">let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Important to prevent an infinite loop!
}
</pre>
<h4>do...while</h4>
<p>The condition is checked <strong>after</strong> each iteration, guaranteeing the loop runs at least once.</p>
<pre class="prose-code-block">let i = 5;
do {
  console.log(i); // Runs once
  i++;
} while (i < 5);
</pre>
