let nums = [0, 1, 1, 2, 3, 4, 5, 20, 1, 6, 7];

for (let num of nums) console.log(num);

nums.forEach((num, index) => console.log(num, index));

for (let index in nums) console.log(nums[index]);