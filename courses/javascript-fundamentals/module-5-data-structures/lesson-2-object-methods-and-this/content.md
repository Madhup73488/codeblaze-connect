### Lesson 5.2: Object Methods and `this`
<p>When a function is a property of an object, it's called a <strong>method</strong>. Methods allow objects to have behavior.</p>
<pre class="prose-code-block">const person = {
  name: "Alice",
  greet() { // Shorthand method syntax
    console.log(`Hello, my name is \${this.name}.`);
  }
};

person.greet(); // Outputs: Hello, my name is Alice.</pre>
<p>The <code class="prose-inline-code">this</code> keyword refers to the object the method was called on (the object before the dot). Its value is determined at call time.</p>
