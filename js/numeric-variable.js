// Create three variables price, quantity, and total to store the information needed.
var // price
var // quantity
var // total

// Assign values to the price and quantity variables.
price=5; // 5
quantity=14; // 14

// Calculate the total by multiplying the price by quantity.
total= price * quantity; // 70

// Get the element with an id of cost by using document.getElementById and stored it as a variable called 'el'
var el  = document.getElementById("cost");// element with id = "cost"

// Use el.textContent to display the total cost.

el.textContent= "$" +total; // $70