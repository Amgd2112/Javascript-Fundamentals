/**
 * @param {number[]} nums
 * @return {number}
 */


/**
 * “S” is the sum of the arithmetic sequence,
 * “a” as the first term,
 * “d” the common difference between the terms,
 * “n” is the total number of terms in the sequence and
*/
var S = (n, a=1, d=1) => n/2 * (2*a + d * (n-1));

var countNumbers = function(nums){
    //Returns the count of each number
    let marker = {};
    for(let num of nums){
        if(num in marker) marker[num] += 1;
        else marker[num] = 1;
    }
    return marker;
};

var numIdenticalPairs = function(nums) {
    let counts = countNumbers(nums);
    return Object.values(counts).map(count => S(count - 1)).reduce((total, num) => total+num);
};


let nums = [1, 2, 3, 1, 1, 3];
// Output: 4
console.log(numIdenticalPairs(nums));