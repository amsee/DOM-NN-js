// getElementsbyTagName
var lis = document.getElementsByTagName('li')
    // >lis - returns a HTML collection of li tags

// cycle through the titles
for(i = 0; i < titles.len; i++){
    console.log(titles[i])
}

// can not use array methods on it
var titles = document.getElementsByClassName('title');
// check for an array
console.log('Array.isArray(titles)') // returns false because it is not an array
// creates an array from this HTML collection
console.log('Array.isArray(Array.from(titles))') // returns true

// cycling through in an array now
Array.from(titles).forEach(function(item){
    console.log(item);
})
