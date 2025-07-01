### CSS Transitions
Provide smooth, animated changes when a property's value changes (e.g., on a `:hover` state).

**Properties:**
*   `transition-property`: Which property to animate (`all` is common).
*   `transition-duration`: How long the animation takes (e.g., `0.5s` or `500ms`).
*   `transition-timing-function`: The speed curve (`ease`, `linear`, `ease-in-out`).
*   `transition-delay`: Delay before starting.

**Detailed Example: Button Hover Effect**
```css
.btn {
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border: 2px solid transparent;
  cursor: pointer;
  /* The magic line! */
  transition: background-color 0.3s ease, transform 0.2s ease-out;
}

/* Change the properties on hover */
.btn:hover {
  background-color: #2980b9;
  transform: translateY(-3px); /* Move the button up 3 pixels */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
```
### CSS Animations
Create complex, multi-step animations using `@keyframes`.

**`@keyframes` Rule:** You define the animation's stages from `0%` to `100%`.
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); }
}
```
**Animation Properties:**
*   `animation-name`: The name of your `@keyframes` rule.
*   `animation-duration`: How long one cycle takes.
*   `animation-iteration-count`: How many times it plays (`infinite` for a loop).
*   `animation-direction`: `alternate` to play forwards then backwards.
*   `animation-fill-mode`: What styles apply before/after the animation (`forwards`, `backwards`).

**Detailed Example: Loading Spinner**
```html
<div class="spinner"></div>
```
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* Apply the animation */
  animation: spin 1s linear infinite;
}
```
### Transforms (2D & 3D)
Manipulate an element's position, rotation, and size.
*   `transform: translate(x, y);` (move)
*   `transform: scale(x, y);` (resize)
*   `transform: rotate(deg);` (rotate)
*   `transform: skew(x-deg, y-deg);` (skew)

### Exercise: Animate a Modal
1.  Create a modal `div` that is hidden by default (`opacity: 0; visibility: hidden;`).
2.  Create a `@keyframes` animation that makes the modal fade in and scale up from a small size.
3.  Create a CSS class (e.g., `.show-modal`) that sets `opacity: 1;` and `visibility: visible;`.
4.  Use JavaScript (or just a `:hover` on the body for a demo) to add this class to the modal, triggering the transition/animation.

### Helpful Links:
*   [MDN Web Docs: Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [MDN Web Docs: Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
*   [Cubic-bezier.com](https://cubic-bezier.com/) (A tool for creating custom timing functions)
