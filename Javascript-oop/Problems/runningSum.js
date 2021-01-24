/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total = 0;

    return nums.map(num => {
        total+=num;
        return total;
    });
};

let nums = [1, 2, 3, 4];
// Output: [1,3,6,10]
console.log(runningSum(nums));