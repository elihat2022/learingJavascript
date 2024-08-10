/*
Object Oriented Programming: Use a Constructor to Create Objects
OOP Helps to model Real-Life Objects.

Keeps the propierties and functions "methods" inside the object.
Update the propierties insted of returning a value.
*/

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false