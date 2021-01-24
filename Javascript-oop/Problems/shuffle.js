/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function(nums, n) {
    let shuffled = new Array(nums.length);

    for(let idShuffled = 0, idX = 0, idY = n; idShuffled < shuffled.length; idShuffled+=2, idX++, idY++){
        shuffled[idShuffled] = nums[idX];
        shuffled[idShuffled+1] = nums[idY];
    }

    return shuffled;
};

output = shuffle(nums=[2,5,1,3,4,7], n=3);
console.log(output);