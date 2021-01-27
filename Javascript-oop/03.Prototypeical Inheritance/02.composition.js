Person = function(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

const canEat = {
    eat: function(){
        this.hunger --;
        console.log('Eeating');
    }
};

const canWalk = {
    walk: function(){
        console.log("Walking");
    }
};

let person = Object.assign({}, canEat, canWalk);
Object.assign(Person.prototype, canEat, canWalk);

let p = new Person("Amgad", "Hussein", 21, "Male", "Programming");
let keys = []; for(let key in p) keys.push(key);
console.log(keys);
