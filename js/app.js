// cached elements
const inputElement = document.querySelector('#input')
const buttonElement = document.querySelector('#submit-button')
const ulElement = document.querySelector('#todo-list')

// event listner to button when clicked
buttonElement.addEventListener('click', (evt) => {
  // create a new <li> element
  const li = document.createElement('li')

  // set text to <li> to text entered in <input>
  li.textContent = inputElement.value
 
  // reset text in <input> field to an empty string
  inputElement.value = ''
  ulElement.appendChild(li)

})

// level up
