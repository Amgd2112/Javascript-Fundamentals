/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let decoded = new Array(encoded.length + 1);
    decoded[0] = first;
    for(let i = 0; i < encoded.length; i +=1){
        decoded[i+1] = first ^ encoded[i];
        first = decoded[i+1];
    }

    return decoded;
};
