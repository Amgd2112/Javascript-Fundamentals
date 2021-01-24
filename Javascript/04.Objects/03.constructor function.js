function Person (first_name, mid_name, last_name, age, sex){
    this.name = {
        first:first_name,
        mid:mid_name,
        last:last_name
    };
    this.age = age;
    this.sex = sex;
    this.greating = function(){
        console.log("Hello,", this.name.first, this.name.last);   
    };
}

let amgad = new Person("Amgad", "Hussein", "Al-domiaty", 21, "male");

console.log(amgad.age);
amgad.greating()


//Check if an item exist
if ("sex" in amgad) console.log("Exist");


//Iterating over an object
for (let key in amgad) console.log(key, amgad[key]);//Over the properties
for (let entry of Object.entries(amgad)) 
    console.log(`key: ${entry[0]}, value: ${entry[1]}`);//Enumerating Properties, return a list of key, value==> [key, value]

console.log(Object.keys(amgad));//Get properties
console.log(Object.values(amgad))//Get property value


//Copy an object
let anotherAmgad = Object.assign({}, amgad);//copy the object into the given object
anotherAmgad.name.last = "Empty";

let anotherAmgad2 = {...amgad};//copy using the spread operator

console.log(amgad, anotherAmgad, anotherAmgad2);
console.log(amgad.name.last);//Original ref changed 