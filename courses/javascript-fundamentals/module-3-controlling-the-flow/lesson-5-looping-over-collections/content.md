### Lesson 3.5: Looping Over Collections: `for...of` and `for...in`
<p>JavaScript has specialized loops for collections.</p>
<h4>for...of</h4>
<p>The modern, preferred way to loop over <strong>iterable</strong> objects like Arrays and Strings. It iterates over the <strong>values</strong>.</p>
<pre class="prose-code-block">const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}
</pre>
<h4>for...in</h4>
<p>Iterates over the <strong>keys (property names)</strong> of an object. <strong>Do not use this for arrays.</strong></p>
<pre class="prose-code-block">const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(`\${key}: \${person[key]}`);
}
</pre>
