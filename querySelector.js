// vanilla js
const wrap = document.querySelector('#wrapper');
//console.log(wrap);

// grabs the second child of in the ul tag inside class book-list
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(x){
    console.log(x);
})