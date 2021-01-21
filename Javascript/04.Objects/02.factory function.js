function person(first_name, mid_name, last_name, age, sex){
    return {
        name:{
            first:first_name,
            mid:mid_name,
            last:last_name
        },
        age,
        sex,
        
        greating() {
            console.log("Hello,", first_name, last_name);
        }
    };
}

nona = person("Hanan", "Mohamed", "Gamal", 21, "female");

console.log(nona.age);
nona.greating()
