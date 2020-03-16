// everything in a document is a node
// when we reach in and grab the element, we are grabbing a type of node

const banner = document.querySelector('#page-banner');
// to find node type
console.log('#page-banner node type is:', banner.nodeType); // returns #page-banner node type is: 1 (Element)
console.log('#page-banner node name is:', banner.nodeName); // returns #page-banner node is: DIV
console.log('#page-banner has child nodes:', banner.hasChildNodes()); // returns true

const clonedBanner = banner.cloneNode(true); // true: deeply into the node
const clonedBanner = banner.cloneNode(false); // false: returns div (does not return nested nodes)
console.log(clonedBanner);
