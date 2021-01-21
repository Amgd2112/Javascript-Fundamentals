// For (initialExperssion; Condition; increamentExperssion){}

for (let i = 0; i < 5; i++){
    if (i === 3) console.log("For,", i);
    else console.log("Hi,", i);
}

// While
let i = 0;//initialExperssion
while (i < 5){//Condition
    if (i === 3) console.log("While, ", i);
    else console.log("HI, ");
    i++;//increamentExperssion
}


// Do-while
do { //This block of code will run anyway 
    if (i === 3) console.log("HI, ", i);
    else console.log("Do, ");
    i++;
} while(i < 5)


// For-in
let person = {
    name:"amgd",
    age:21,
    sex:"male"
};

for (key in person)//In objects iterate by key
    console.log(key, person[key]);


let colors = ['red', 'green', 'blue']
for (index in colors)//In list iterate by index, because the index is the key of an element
    console.log(index, colors[index]);


// For-of
for (let color of colors)//Iterate by value
    console.log(color);
