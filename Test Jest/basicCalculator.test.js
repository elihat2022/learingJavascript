
const {add, substract, multiply, divide} = require('./basicCalculator');

test("Return the value of the input a to add input b", () =>{
    expect(add(5,5)).toBe(10);
})

test("Return the value of the input a to subsctract input b", () =>{
    expect(substract(5,3)).toBe(2);
})

test("Return the value of the input a that multipies input b", () =>{
    expect(multiply(5,5)).toBe(25);
})

test("Return the value of the input a that divides input b", () =>{
    expect(divide(5,2)).toBe(2.5);
})