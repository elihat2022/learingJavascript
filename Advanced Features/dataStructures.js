// Set, Save a new array of unique values

const repeatedCities = ['New York', 'New York', 'Los Angeles', 'San Francisco', 'San Francisco'];

const uniqueCities = [ ... new Set(repeatedCities)];

console.log(uniqueCities);


// Map, save a new array appling the same function to each element

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers);


// forEach, iterate over an array and do something with each element
const oddNumbers = [2, 4, 6, 8, 10];

oddNumbers.forEach(element => {
    console.log(element + 1);
    
});


// Filter, save a new array with only the elements that pass a condition

const randomNumbers = Array.from({length:10},() => Math.floor(Math.random() * 30));

const newOddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(newOddNumbers);

