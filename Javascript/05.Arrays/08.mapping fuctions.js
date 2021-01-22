const numbers = [1, 2, 92, 5, -1, 53, 32];

// Testing the elements
const allPositive = numbers.every(value => value >= 0);
console.log(allPositive);

const atleastPositive = numbers.some(value => value >= 0);
console.log(atleastPositive);

// Filtering an Array
let positiveNumber = numbers.filter(value => value >= 0);
console.log(positiveNumber); 


// Mapping
let str = "1 2 3 4 5 6";
let converted = str.split(' ').map(parseInt);
console.log(typeof converted[0]);

let mapping = positiveNumber.map(number => ({logNumber:Math.log(number)}));
console.log(mapping);


// Reduce method
let total = numbers.reduce((accumulator, current_value) => accumulator+current_value, initialValue=0);
console.log(total);