# ph-assignment-05
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer:
getElementById : Selects a single element based on its unique id attribute. Returns a single Element object, or null if no element with the specified ID is found.

getElementsByClassName : Selects elements based on their class name. Elements matching the class are added or removed from the DOM after the initial selection .

querySelector : Selects the first element that matches a specified CSS selector. 

querySelectorAll : Selects all elements that match a specified CSS selector.

2. How do you create and insert a new element into the DOM?

answer :
create - Use document.createElement(tagName) to create a new HTML element node. Replace tagName with the desired HTML tag. 
insert - parentNode.appendChild(childNode): Appends the new element as the last child of a specified parent element.

3. What is Event Bubbling and how does it work?

answer :
Event bubbling is a mechanism in the Document Object Model (DOM) where an event, such as a mouse click, first triggers on the innermost element where it occurred and then successively "bubbles up" to its parent, grandparent, and other ancestors in the DOM tree.

work - The event starts at the root of the DOM tree and moves down to the target element. By default, event listeners are not active during this phase, but you can enable them by setting a parameter in the addEventListener() method.

4. What is Event Delegation in JavaScript? Why is it useful?

answer : 
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the Document Object Model (DOM) tree .

useful - It reduces the number of event listeners in the DOM, which can significantly improve performance, especially in applications with a large number of interactive elements (e.g., long lists, tables). Fewer listeners mean less memory consumption and less overhead for the browser.

5. What is the difference between preventDefault() and stopPropagation() methods?

answer :
preventDefault() - This method is used to prevent the default action associated with an event. Every event can have a default action performed by the browser if not explicitly handled. For example, clicking a link (<a>) typically navigates to the specified URL, and submitting a form (<form>) typically reloads the page or sends data to a server. Calling event.preventDefault() on these events will prevent these default browser behaviors from occurring.

stopPropagation() - This method is used to prevent the event from propagating (bubbling or capturing) further up or down the DOM tree. When an event occurs on an element, it typically propagates through its parent elements (bubbling phase) or from ancestor elements down to the target (capturing phase). Calling event.stopPropagation() stops this propagation, meaning that any event listeners on parent or child elements for the same event type will not be triggered.