/**
 * @param {number[]} nums
 * @return {number[]}
 */

var arithmeticSequence = (a1, d, nth) => a1 + (nth - 1) * d;
var decompressRLElist = function(nums) {
    let decompress = new Array();
    for(let i = 1; i <= nums.length / 2; i ++){
        let freq = nums[arithmeticSequence(0, 2, i)], val = nums[arithmeticSequence(1, 2, i)];
        decompress.push(...new Array(freq).fill(val));
    }
    return decompress;
};
