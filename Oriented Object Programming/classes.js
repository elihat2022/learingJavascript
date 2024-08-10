class Car {
    constructor(color, name){
        this.color = color;
        this.name = name;
    }
    turnOn(){
        console.log('The car is on');
    }
}

const car1 =  new Car('red', 'Ferrari');
const car2 =  new Car('Blue', 'Toyota');

console.log(car1);
console.log(car2);