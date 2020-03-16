var book = document.querySelector('li:first-child .name');
    // >book

// grab an attribute
book.getAttribute('class') // returns name

book.setAttribute('class', 'name-2')
    // >book    // returns class="name-2"

// check if it has an attribute
book.hasAttribute('class') // returns true
book.hasAttribute('href') // returns false

// remove an attribute
book.removeAttribute('class') 
book.setAttribute('class', 'name')