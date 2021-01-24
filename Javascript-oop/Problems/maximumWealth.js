/**
 * @param {number[][]} accounts
 * @return {number}
 */

var getWealth = function(account){
    return account.reduce((total, num) => total+num);
};

var maximumWealth = function(accounts) {
    let maximum = Number.NEGATIVE_INFINITY;
    for(let account of accounts){
        let wealth = getWealth(account);
        if(maximum < wealth) maximum = wealth;
    }

    return maximum;
};


let accounts = [[2,8,7],[7,1,3],[1,9,5]];
// Output: 17
console.log(maximumWealth(accounts));