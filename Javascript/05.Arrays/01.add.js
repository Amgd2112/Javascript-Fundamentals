const nums = [1, 2, 3, 4, 5, 20];

nums.push(6, 7);//add to end 
nums.unshift(0, 1);//and to beginning
let index = 8; //position
nums.splice(start=index, deleteCount=0, 1);//add to the middle

console.log(nums);