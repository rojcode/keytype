
/**
 * Changes the content of an element using a selector.
 * @param {string} selector - The selector of the element (e.g., an id).
 * @param {string} content - The new text content to set for the element.
 * @param {function} callback - A function to be executed on the selected element (optional).
 */
const changeInnerHtmlById = (selector, content, callback = (element) => {}) => {
  const element = document.querySelector(`#${selector}`);
  if (element) {
    element.innerHTML = content;
    callback(element);
  } else {
    console.error(`Element with selector #${selector} not found.`);
  }
}



document.addEventListener('keydown',(event)=>{
  changeInnerHtmlById('title',event.keyCode)
  changeInnerHtmlById('eventKey',event.key);
  changeInnerHtmlById('event-location',event.location);
  changeInnerHtmlById('event-which',event.which);
  changeInnerHtmlById('event-code',event.code);
  

})


