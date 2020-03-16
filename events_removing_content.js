var h2 = document.querySelector('#book-list h2');

// listen to a click event
h2.addEventListener('click', function(e){
    console.log(e.target); 
    console.log(e); // returns all the properties in the object
}); 

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e)){

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click',function(e) {
    e.preventDefault();
    console.log('navigation to',e.target.textContent, ' was prevented');
})
