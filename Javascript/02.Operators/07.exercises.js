// Exercise1: swap(a, b)
let a='red', b='blue';

console.log(`a: ${a}, b: ${b}`);

let temp=a; a=b; b=temp;
delete temp;

console.log(`a: ${a}, b: ${b}`);
