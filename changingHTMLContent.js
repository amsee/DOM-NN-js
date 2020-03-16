// using getElementByClassName, returns a HTMLCollection
// must use: Array.from(books).forEach(function(book))

// using document.querySelectorAll('#book-list li .name')
// Array method not required
var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    // console.log(book.textContent); // retrieve text content
    book.textContent += '(book title)'; // appending text
});

// update HTML
const bookList = document.querySelector('#book-list');
// change inner HTML with innerHTML properties
console.log(bookList.innerHTML); // logs all HTML inside the booklist

// to change the content of HTML
bookList.innerHTML = '<h2>Books and more books...</h2>'; // completely replace content
bookList.innerHTML += '<p>This is how you add HTML</p>'; // append to existing content



