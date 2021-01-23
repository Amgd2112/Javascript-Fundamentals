// Function Declaration
    // U can call it before declaration
    // This called hoisting: hoisting is the process of moving function declaration to the top

let numbers = new Array(10).fill(1);
console.log(sum1(numbers));

function sum1(array){
    return array.reduce((acc, current) => acc+current);
}
    
// Anonymous Function Expression
    // U can't call it before define it
let sum2 = (array) => array.reduce((acc, current) => acc+current);
console.log(sum2(numbers));
    