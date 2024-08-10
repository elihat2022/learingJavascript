/*
Functional Programming keeps the variables outside of the function.
Functions uses data as parameters and returns a value. 
*/

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(`The total is: $${total}`);