/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if(n%4==0) return false;
    return true;//winnerChickenDinner

};

console.log(canWinNim(1));
console.log(canWinNim(2));
console.log(canWinNim(4));