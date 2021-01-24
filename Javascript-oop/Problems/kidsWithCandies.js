/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

    // let isGreatest = new Array(candies.length).fill(false);
    // let greatest = Math.max(...candies);

    // for(let index=0; index< candies.length; index+=1){
    //     if(candies[index] + extraCandies >= greatest) isGreatest[index] = true;
    // }

var kidsWithCandies = function(candies, extraCandies) {
    let greatest = Math.max(...candies);
    let isGreatest = candies.map(candy => (candy + extraCandies >= greatest));
    return isGreatest;
};

let output = kidsWithCandies(candies=[12, 1, 12], extraCandies=10);
console.log(output);