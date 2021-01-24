
var Point = function(x, y){
    this.x = x;
    this.y = y
}

var Circle = function(radius, location){
    // Instance members
    this.radius = radius;
    this.location = location;
    Object.defineProperty(this, "location", {
        //read
        get: function(){
            return location;
        },
        //modify
        set: function(input){
            if(input instanceof Point)
                location = input
        }
    });
}

// Prototypical inheritance
// Prototype members
Circle.prototype.area = function() {
    // A=πr2
    return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.toString = function(){
    return `Circle with radius ${this.radius}`;
};
    

let c = new Circle(4, new Point(0, 10));
console.log(c.area());


console.log(Object.keys(c)); // Only returns instance members
console.log(Object.keys(Circle.prototype)); // Only returns prototype members

// Returns all members (instance + prototype)
for(let key in c) console.log(key); 


// Check if a property 
console.log(c.hasOwnProperty("radius"));
console.log(c.hasOwnProperty("area"));
