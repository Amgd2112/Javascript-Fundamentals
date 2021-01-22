let first = [1, 2, 3];
let second = [4, 5, 6];


const allin1 = first.concat(second);
const allin2 = [...first, ...second];
// const allin2 = [...first, 'a', ...second, 'b'];

console.log(first, second, allin1, allin2);


let part = allin1.slice(start=2, end=5);
console.log(part);
