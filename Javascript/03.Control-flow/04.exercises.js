// Exercise1 : max(a, b)
let maxNumber = maximum(10, 90);
console.log(maxNumber);

function maximum(num1, num2){
    return (num1 > num2) ? num1 : num2;
}


// Exercise2 : isLandscape(width, height)
console.log(isLandscape(width=300, height=400));

function isLandscape(width, height){
    return width > height;
}


// Exercise3 : fizzBuzz(n) ==>%5=buzz, %3=fizz
const ouput = fizzBuzz(5);
console.log(ouput);

function fizzBuzz(input){
    if(typeof input !== "number")
        return "Not a number";

    let fizz='', buzz='';
    if (input%3==0) fizz = "Fizz";
    if (input%5==0) buzz = "Buzz";
    
    if (fizz || buzz) return fizz+buzz;
    return input;
}


// Exercise4 : speedLimit==>70km/h, points 1==>5 
console.log(checkSpeed(80));

function checkSpeed(speed){
    if (speed <  75)
        return "Ok";
    
    let points = Math.floor((speed - 70) / 5);
    if (points >= 12) return "License suspended";
    else return `Points ${points}`;
}


// Exercise5 : evenOdd
showNumber(10)

function showNumber(limit){
    for (let i = 0; i <= limit; i++)
        console.log((i%2==0) ? `${i} "EVEN"` : `${i} "ODD"`);
} 


// Exercise6
let array = [0, NaN, 1, 2, 3, undefined, 'a', ''];
console.log(countTruthy(array))

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if(value) count+=1; 
    return count;
}


// Exercise7
let person = {
    name:"Ahmed",
    age:30,
    sex:"Male"
};
showProperties(person);

function showProperties(obj){
    for(let key in obj)
        if (typeof obj[key] === "string") console.log(`${key}:${obj[key]}`);
}


// Exercise8: the sum of multiple of 3, 5 from zero up to the limit
let total = sum(10);
console.log(total);

function sum(limit){
    let total=0;
    for (let i = 0; i <= limit; i++)
        if((i%3==0) || (i%5==0))
            total+=i;

    return total;
}


// Exercise9 : student grade
let marks = [80, 80, 50];
console.log(calcGrade(marks));

function getTotal(marks){
    let total = 0;
    for(let value of marks)
        total+=value;
    return total;
}

function getGrade(grade){
    if ((grade <= 59) && (grade >= 1)) return 'F';
    if ((grade <= 69) && (grade >= 60)) return 'D';
    if ((grade <= 79) && (grade >= 70)) return 'C';
    if ((grade <= 89) && (grade >= 80)) return 'B';
    return 'A';
}

function calcGrade(marks){
    let avg = getTotal(marks)/marks.length;
    return getGrade(avg);
}


// Exercise10
showStars(5);

function showStars(rows){
    let start = '*';
    for (let i = 0; i < rows; i ++){
        console.log(start);
        start += '*';
    }
}


// Exercise11
showPrimes(20);

function isPrime(number){
    if (number <= 1) return false;
    if (number == 2) return true;
    if (number%2 == 0) return false;
    
    for (let i = 3; i < Math.log(number) + 1; i+=2)
        if (number%i==0) return false;
    return true;
}

function showPrimes(limit){
    for(let i = 0; i <= limit; i ++) 
        if (isPrime(i)) console.log(i);
}

