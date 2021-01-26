/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     let results = {};
//     for(let i = 0; i < nums.length; i++)
//         results[nums[i]] = i;

//     for(let i = 0; i < nums.length; i++){
//         let diff = target - nums[i];
//         if(diff in results)
//             if(results[diff] != i)
//                 return [i, results[diff]];
//     }
// };

var twoSum = function(nums, target) {
    let results = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in results)
            if(results[diff] != i)
                return [i, results[diff]];
        results[nums[i]] = i;
    }
};