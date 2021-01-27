/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let decompress = [];
    for(let even = 0, odd = 1; odd < nums.length; even += 2, odd += 2){
        for(let i = 0; i < nums[even]; i ++){
            decompress.push(nums[odd]);
        }
    }
    return decompress;
};


console.log(decompressRLElist(nums = [1,1,2,3]));