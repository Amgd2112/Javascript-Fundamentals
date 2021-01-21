// Break-continue 

let colors = ['red', 'green', 'blue']

for (let color of colors){
    if (color === 'blue') break;
    else console.log(color);
}

for (let color of colors){
    if (color === 'red') continue;
    else console.log(color);
}
