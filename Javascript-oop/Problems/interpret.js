/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let concatenatedResult = [];

    for(let i = 0; i < command.length; i++){
        if(command[i] == 'G') concatenatedResult.push('G');
        else if (command[i] == '(' && command[i+1] == ')') {
            concatenatedResult.push('o');
            i++;
        }
        else {
            concatenatedResult.push("al");
            i+=3;
        }
    }

    return concatenatedResult.join('');
};


let command = "(al)G(al)()()G";
// Output: "alGalooG"
console.log(interpret(command));