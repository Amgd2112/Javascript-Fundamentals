/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortedNums = [...nums].sort((a, b) => a - b);
    let collector = new Array(101).fill(null); //0 <= nums[i] <= 100

    for(let i = 0; i < sortedNums.length; i++){
        let currentValue = sortedNums[i];
        if(collector[currentValue] == null)
            collector[currentValue] = i;
    }

    let result = nums.map(value => collector[value]);
    return result;
};

