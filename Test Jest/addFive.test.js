const addFive = require('./addFive');

test("Return the value of the input plus 5", () =>{
    expect(addFive(5)).toBe(10);
})