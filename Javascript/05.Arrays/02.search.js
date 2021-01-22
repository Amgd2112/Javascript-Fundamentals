let nums = [0, 1, 1, 2, 3, 4, 5, 20, 1, 6, 7];

//search for index of number
console.log(`Frist index of value(1) is ${nums.indexOf(searchElement =1, fromIndex=2)}`);
console.log(`Last index of value(10 is ${nums.lastIndexOf(1)}`);


//check if the number exits in the array 
console.log(`Let's see if the array contain 8 ${nums.includes(searchElement=8, fromIndex=2)}`);
console.log(`Array contain 5 ${nums.includes(5)}`);


// seach for an element in the array by a function
console.log(`Get the number that's greater than 10 from the array :${nums.find(function(num) {return num >= 10})}`);
    //nums.findIndex(function(num) {return num >= 10}) = nums.findIndex(num => (num >= 10))
console.log(`Get the index of the number that's greater than 10 from the array: ${nums.findIndex(num => (num >= 10))}`);
