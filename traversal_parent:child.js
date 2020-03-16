const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode); // grabs reference to the parent node
console.log('the parent node is:', bookList.parentElement.parentElement); 

console.log(bookList.childNodes); // accessing the child nodes. returns line breaks (arrow)
console.log(bookList.children); // grab holds of the child nodes without the line breaks
