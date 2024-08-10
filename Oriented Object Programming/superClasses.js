class Vehicle{

    constructor(type){
        this.type = type;
    }
    startEngine(){
        console.log("Engine started");
    }

}

class Car extends Vehicle{
    drive(){
        console.log("Driving a car!");
    }
}

class Motorcycle extends Vehicle{
    startEngine(){
        console.log("Motorcycle engine started with a roar!")
    }
}

class Truck extends Vehicle{
    startEngine(){
        console.log("Truck engine started with a heavy rumble!")
    }
    loadCargo(){
        console.log("Loading cargo into the truck!")
    }
}   

const truck1 = new Truck("truck");
truck1.startEngine();
truck1.loadCargo(); 

const car1 = new Car("car");
car1.startEngine();
car1.drive();

console.log(Object.keys(car1));
console.log(Object.values(car1));
console.log(Object.entries(car1));