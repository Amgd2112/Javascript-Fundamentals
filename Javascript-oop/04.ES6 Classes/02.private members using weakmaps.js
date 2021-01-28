const _interests = new WeakMap();

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        // private property
        _interests.set(this, interests);
    }
}

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests);
        this.subject = subject;
    }
}


let p = new Person("Amgad", "Hussein", 21, "Male", "Programming");
console.log(p.interests);
console.log(p._interests);

// It's no longer a member of the class the only way to access it by the _ interest
console.log(_interests.get(p));

let t = new Teacher("Saly", "Tarek", 40, "Female", "No thing", "Arabic");
console.log(_interests.get(t));
