// Exercise1
let numbers = range(0, 10);
console.log(numbers);

function range(start, stop, step=1){
    let array = [];
    for (let i = start; i < stop; i += step) array.push(i);
    return array;
}

// Exercise2
console.log(includes(numbers, target=9));
console.log(includes(numbers, target=-1));

function includes(array, target){
    for (let item of array) if (item == target) return true;
    return false;
}

//Exercise3
// let output = except(numbers, [1, 8]);
// console.log(output);

function except(target, excluded){
    let marker = new Array(target.length).fill(1);

    for(let i = 0; i < excluded.length; i++)
        for(let j = 0; j < target.length; j++)
            if (excluded[i] === target[j])
                marker[j] = 0;

    let output = [];
    for(let i = 0; i < target.length; i++)
        if (marker[i] == 1) output.push(target[i]);

    return output;
}

//Exercise4
console.log(move(numbers, 0, 2));

//increment
//decrement
// let dir = (end < index) ? -1 : 1;

// for (let i=index; i!=end; i+=dir){
//     let temp = array[i];
//     array[i] = array[i+dir];
//     array[i+dir] = temp; 
// }

//2
function move(array, index, offset){
    let end = index + offset;
    if (end >= array.length || end < 0) {
        console.error("Out of index");
        return;
    }
    
    let currentNum = array.splice(index, 1)[0];
    array.splice(end, 0, currentNum);

    return array;
}

//Exercise5
numbers = [1, 2, 3, 4, 5, 1, 1];
console.log(countOccurences(numbers, 0));

function countOccurences(array, searchElement){
    let count = 0;
    let first = array.indexOf(searchElement);
    while (first != -1){
        first = array.indexOf(searchElement, first+1);
        count += 1;
    }
    return count;
}

//Exercise6
console.log(getMax(numbers));

function getMax(array){
    let min = Number.NEGATIVE_INFINITY;
    for (let value of array)
        if(min < value) min = value;
    return min;
}