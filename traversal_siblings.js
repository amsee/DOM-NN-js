const bookList = document.querySelector('#book-list');

// navigate between different sibling elements
console.log('book-list next sibling is:', bookList.nextSibling); // returns #text
console.log('book-list next element sibling is:', bookList.nextElementSibling); //returns #form

console.log('book-list previous sibling is:', bookList.previousSibling); // returns #form
console.log('book-list previous element sibling is:', bookList.previousElementSibling); // returns #header

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';
