// Exercise1
let total = sum(1, 2, 3, 4, 5, 5, 100, -19);
console.log(total);

function sum(...args){
    return args.reduce((acc, current) => acc+current);
}


// Exercise2
const circle = function(radiues){
    return {
        radiues,
        // A=πr2
        get area() {
            return Math.PI * Math.pow(this.radiues, 2);
        }
    }
} 

let c = circle(5);
console.log(c.area);


// Exercise3
try{
    // numbers = [1, 2, 3, 4, 5, 1, 1];
    // console.log(countOccurences(numbers, 0));
    console.log(countOccurences(true, 0));
} catch(e){
    console.log(e);
}

function countOccurences(array, searchElement){
    if (!Array.isArray(array))
        throw new Error("Input is not an Array.");

    let count = 0;
    let first = array.indexOf(searchElement);
    while (first != -1){
        first = array.indexOf(searchElement, first+1);
        count += 1;
    }
    return count;
}