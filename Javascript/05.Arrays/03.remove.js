let nums = [0, 1, 1, 2, 3, 4, 5, 20, 1, 6, 7];


nums.pop();//remove form the end 
nums.shift();//remove from the beginning
nums.splice(start=1, deleteCount=1);//remove from the middle

console.log(nums);


//Remove all the element form the array
    //solution1
nums.length = 0;
console.log(nums);

    //solution2
nums.splice(start=0, deleteCount=nums.length);
console.log(nums);
