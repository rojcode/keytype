# Dynamic Element Content Changer

This project includes a JavaScript function (`changeInnerHtmlById`) that allows you to dynamically change the content of an HTML element using its selector. Additionally, there is an event listener attached to the `keydown` event that demonstrates the usage of this function by updating the content of several elements with information about the key pressed.

## Function Usage

### `changeInnerHtmlById(selector, content, callback)`

Changes the content of an HTML element identified by the provided selector.

- **Parameters:**
  - `selector` (string): The selector of the element (e.g., an id).
  - `content` (string): The new text content to set for the element.
  - `callback` (function, optional): A function to be executed on the selected element after updating its content.

**Example:**
```javascript
changeInnerHtmlById('title', 'New Title', (element) => {
  element.style.color = 'blue';
});
