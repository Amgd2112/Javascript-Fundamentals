/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffledString = new Array(s.length);
    for(let i = 0; i < s.length; i ++)
        shuffledString[indices[i]] = s[i];
    
    return shuffledString.join('');
};
