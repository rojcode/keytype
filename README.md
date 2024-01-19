# Dynamic Element Content Changer with Keyboard Event
![Project Screenshot](https://s6.uupload.ir/files/screen_shot_1402-10-28_at_22.05.25_hgns_whaz.png)

This project includes a JavaScript function (`changeInnerHtmlById`) that allows you to dynamically change the content of an HTML element using its selector. Additionally, there is an event listener attached to the `keydown` event that demonstrates the usage of this function by updating the content of several elements with information about the key pressed.

## Project Overview

The primary goal of this project is to showcase a simple JavaScript function for dynamically updating HTML elements based on their selectors. The project also includes an event listener that captures the `keydown` event, providing real-time updates about the key pressed by the user.

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

