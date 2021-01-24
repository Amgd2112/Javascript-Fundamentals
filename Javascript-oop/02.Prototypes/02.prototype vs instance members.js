
var Point = function(x, y){
    this.x = x;
    this.y = y
}

var Circle = function(radius, location){
    // Instance members
    this.radius = radius;

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
Circle.prototype.Area = function() {
    // A=πr2
    return Math.PI * Math.pow(this.radius, 2);
};

Circle.prototype.toString = function(){
    return `Circle with radius ${this.radius}`;
};
    


let c1 = new Circle(4, new Point(0, 10));
let c2 = new Circle(5, new Point(90, -1));

console.log(c1.Area());
console.log(c2.Area());
console.log(c1.toString());