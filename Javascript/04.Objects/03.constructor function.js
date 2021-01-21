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


if ("sex" in amgad) console.log("Exist");
for (let key in amgad) console.log(key, amgad[key]);

// for (let entry in Object.entries(amgad)) console.log(entry, amgad);
// for (let key in Object.keys(amgad)) console.log(key);


let anotherAmgad = Object.assign({}, amgad);//copy the object into the given object
anotherAmgad.name.last = "Empty";

let anotherAmgad2 = {...amgad};

console.log(amgad, anotherAmgad, anotherAmgad2);
console.log(amgad.name.last);//Original ref changed 