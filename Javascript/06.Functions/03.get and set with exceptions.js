//getters => access properties
//setters => change (mutate) them

const person = {
    name: {
        first: "Amgad",
        mid: "Hussein",
        last: "Al-domiaty",
    },
    age:21,
    sex:"male",

    greating: function() {
        console.log("Hello,", this.name.first, this.name.last);
    },

    //setter
    set fullName(names){
        // Throwing Exceptions
        if (typeof names !== "string") 
            throw new Error('Value is not a string.');
        if (names.split(' ').length !== 3)
            throw new Error("The full name should be Triple name.");

        let name = names.split(' ');
        this.name.first = name[0];
        this.name.mid = name[1];
        this.name.last = name[2];
    },

    //getter
    get fullName(){ 
        return `${this.name.first} ${this.name.mid} ${this.name.last}`
    },
};

// person.greating();

//Try Catch Error Handling
try {
    person.fullName = 90;
} catch (e){
    // alert(e);
    console.error(e);
}

try {
    person.fullName = "Hanan Mohamed";
} catch (e){
    // alert(e);
    console.error(e);
}

try {
    person.fullName = "Hanan Mohamed Gamal";
} catch (e){
    // alert(e);
    console.error(e);
}

console.log(person.fullName)

