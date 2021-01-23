// Argumetns
function sumArguments(){
    let total=0;
    for (let arg of arguments) total+=arg;
    return total;
}

let total = sumArguments(1, 2, 3, 4, 5, 5);
console.log(total);


// Rest Operators
function sumRestArguments(...args){
    return args.reduce((acc, current) => acc+current);
}

total = sumRestArguments(1, 2, 3, 4, 5, 5);
console.log(total);


//example
function getDiscount(discount, ...items){
    let total = items.reduce((acc, current) => acc+current);
    return total - (discount * total); 
}

console.log(getDiscount(0.2, 100, 20, 8100, 90));



// Default Parameters
function interest(principal, rate=3.5, years=5){
    return principal * rate / 100 * years;
}

console.log(interest(principal=100000));

