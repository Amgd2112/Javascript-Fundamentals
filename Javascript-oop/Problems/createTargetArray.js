/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = new Array();
    for(let i = 0; i < nums.length; i++)
        target.splice(start=index[i], deleteCount=0, nums[i]);

    return target;
};