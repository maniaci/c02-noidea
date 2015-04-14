//Comment out each different Methods to see the changes.

/* METHOD 1
var price = 5;
var quantity = 14;
var total = price * quantity;
*/

/* METHOD 2
var price, quantity, total;
price = 10;
quantity = 12;
total = price * quantity;
*/

/* METHOD 3
var price = 2, quantity = 20;
var total = price * quantity;
*/



// Write the total into the element with id of cost
var el = document.getElementById('cost');  // Gets the element with an id of cost
el.textContent = '$' + total;              // Replaces the content of this element
