// hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change',function(e){
    if(hideBox.checked){ // returns true if checked
        list.style.display = "none";
    } else {
        list.style.display = initial;
    }
})
