/**
 * @param {string} jewels
 * @param {string} stones
 * @return {charber}
 */

var numJewelsInStones = function(jewels, stones) {
    let marker = {};
    for(let jewel of jewels) marker[jewel] = 0;

    for(let stone of stones){
        if(stone in marker) marker[stone] += 1;
    }
    
    return Object.values(marker).reduce((total, num) => total+num);
};

let jewels = "aA", stones = "aAAbbbb";
// Output: 3
console.log(numJewelsInStones(jewels, stones));