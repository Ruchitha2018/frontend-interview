# Event Flow

### What is Event Flow?
Event flow defines the order in which events are triggered in the Document Object Model (DOM).

### What are the Phases of Event Flow?
1. Capturing Phase (Trickle Down)
   - The event starts from the root element `(window)` and moves down the DOM tree toward the target element.
   - This phase allows you to catch the event before it reaches the actual target.
   - To handle events in this phase, you need to set `{ capture: true }` in `addEventListener()`.
2. Target Phase
   - The event reaches the actual target element (where the event was originally triggered, like a button click).
   - This is the point where the event is executed on the target element.
3. Bubbling Phase (Bubble Up)
   - After reaching the target element, the event starts propagating back up the DOM tree toward the root (window).
   - This phase allows ancestor elements to handle the event after the target has executed it.
   - By default, events bubble up unless explicitly stopped using `event.stopPropagation()`

```js
<div id="parent">
  <button id="child">Click Me</button>
</div>
```
```js
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent Clicked (Bubbling)");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child Clicked");
});

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent Clicked (Capturing)");
  },
  true // Capture phase
);
```

```js
//Output
Parent Clicked (Capturing)
Child Clicked
Parent Clicked (Bubbling)
```

### What are the methods used in Event Flow?
1. `event.stopPropagation()`
   - Stops event from propagating further (prevents bubbling or capturing).
2. `event.preventDefault()`
   - Prevents default behavior of an event (e.g., stopping a form submission).
3. `event.stopImmediatePropagation()`:
   - Stops propagation and prevents other event listeners on the same element from executing
```js
document.getElementById("child").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops event from reaching parent
  console.log("Child Clicked");
});
```

### What is Event Delegation?
- Instead of attaching event listeners to multiple elements, you can attach one listener to a parent and handle events dynamically.
```js
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button inside parent clicked!");
  }
});
```