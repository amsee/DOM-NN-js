// add books
const addForm = docuent.forms['add-form'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
})
