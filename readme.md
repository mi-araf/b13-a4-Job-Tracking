# challenge
## Answers to Questions
___
### Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<!-- ```javascript
getElementById(),  getElementsByClassName() and querySelector() / querySelectorAll()
```  -->
The difference among getElementById(), getElementsByClassName(), and querySelector() / querySelectorAll() is how they select elements and what they return.

`getElementById()` --> this method is used to select a single element based on its unique id.This returns a single element; if it doesn't exists, it returns null;

`getElementsByClassName()` --> selects the elements with same class name. This returns a collection of elements with a those who share same class names. 

`querySelector()` --> it allows to select element using CSS selectors (such as: `div`, `p`...).But it only returns the first matching element that matches the CSS selector.

`querySelectorAll()` --> it also allows to select element using CSS selectors. Unlike the previous one, it returns all matching elements as a Nodelist, but it doesn't automatically update when the DOM changes. 

---
### Q2. How do you create and insert a new element into the DOM?
I can create and insert a new element using `createElement()` and `appendChild()` respectively. Also, I can add class name, id name, add text in that content etc. attributes, styles or texts with this methods. For example:
```javascript
// creating a paragraph in the body
const newP = document.createElement("p");
newP.innerText = "Adding a new paragraph";
document.body.appendChild(newP);
```
---
### Q3. What is Event Bubbling? And how does it work?
In JavaScript where an event starts from the element that triggered it and then moves upward through its parent elements in the DOM hierarchy is called **event bubbling**.

When an event happens, like clicking a button, it is first handled by that button. Then the same event moves up to its parent element, then to the grandparent, and continues upward through the page until it reaches the document.
For example:

```javascript
<div id="grandparent">
    <div id="parent">
        <button id="child">Click Me</button>
    </div>
</div>
```
Let's say, all three elements have click event listeners. Clicking on the `button`, first the id with `child` runs, then the event bubbles up to the id- `parent` and runs. After that, it bubbles up again to the `grandparent` id.

This happens because of event bubbling.

---
### Q4. What is Event Delegation in JavaScript? Why is it useful?
**Event Delegation** is a method in JavaScript where an event listener is placed on a parent element to manage events for its child elements.

Instead of giving separate listeners to each child, one listener to parent can handle them all. This works because when an event in a child occurs, the event travels upward through DOM. Then the parent element can catch that event and find out which child triggered it.

This method is useful due to its reduction in event listeners. It helps in performance and also keep the code simpler as well as easy to maintain.

Overall, event delegation is an efficient way to manage events (parent), especially when dealing with multiple similar elements (children).

---
### Q5. What is the difference between preventDefault() and stopPropagation() methods?
`preventDefault()` --> stops the browser's default action. Like, clicking a link will open something, so this method can stops the event to be happened from clicking. 
```javascript
// syntax-example of preventDefault()
form.addEventListener("submit", function(e) {
    e.preventDefault();
});
```

`stopPropagation()` --> stops the event from upward movement through parent element in DOM. Lets say, if an element inside a div element is clicked, the event normally bubbles up to the div. Calling *stopPropagation()* prevents the event from reaching the upper parent elements.
```javascript
// syntax-example of stopPropagation()
button.addEventListener("click", function(e) {
    e.stopPropagation();
});
```
Thus, *preventDefault()* for -- browser and *stopPropagation()* for -- events or event bubbling.