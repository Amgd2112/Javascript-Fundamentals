/* 
 * Don't use inheritance just a seek of using it, 
 * Start with simple objects, and then if you see a number of objects share similar features.
 * One thing to do that you can capture these features inside a generic object and use inheritance.

 * Keep it simple, avoid creating inheritance hierarchies, 
 * if so keep it at one level, don't go more than one level of inheritance.
 */

// SahpeObject
var Shape = function(ShapeName, color){
    this.name = ShapeName;
    this.color = color;
};

Shape.prototype.area = function(){
};

Shape.prototype.circumference = function(){
};

// PointObject
var Point = function(x, y){
    this.x = x;
    this.y = y
}

Point.prototype.getDistance = function(point){
    // d=√((x_2-x_1)²+(y_2-y_1)²)
    return Math.sqrt(Math.pow(point.y - this.y, 2) + Math.pow(point.x - this.x, 2));
};

// CircleObject
var Circle = function(radius, location, color){
    // Default parameters: Call the super class
    Shape.call(this, ShapeName = "Circle", color = color);

    // Properties
    this.radius = radius;
    this.diameter = this.radius * 2; //D=2r
    this.location = location;

    // Set getter and setter
    Object.defineProperty(this, "location", {
        get: function(){
            return location;
        },
        set: function(input){
            if(input instanceof Point)
                this.location = input;
        }
    });
    Object.defineProperty(this, "diameter", {
        get: function(){
            return this.radius * 2;
        }
    });
};

Circle.prototype.toString = function(){
    return `Circle with radius ${this.radius}`;
};


// SquareObject
var Square = function(size, location, color){
    // Default parameters
    Shape.call(this, ShapeName = "Square", color = color);

    // Properties
    this.size = size;
    this.location = location;

    // Set getter and setter
    Object.defineProperty(this, "location", {
        get: function(){
            return location;
        },
        set: function(input){
            if(input instanceof Point)
                this.location = input;
        }
    });
};

Square.prototype.toString = function(){
    return `Square with Side Length ${this.size}`;
};


// Prototypical inheritance
var extend = function(Child, Parent){
    // Child --> Parent --> ObjectBase
    Child.prototype = Object.create(Parent.prototype);
    // Reset the constructor
    Child.prototype.constructor = Child;
};


// Overriding: re-implementing the Parent methods 
extend(Circle, Shape);
Circle.prototype.area = function() {
    // A=πr2
    return Math.PI * Math.pow(this.radius, 2);
};
Circle.prototype.circumference = function() {
    // Cf=2πr
    return Math.PI * this.diameter;
};

// Polymorphism: Each object provide a different implementation from the original method
// So, you will have many forms form the original method
extend(Square, Shape);
Square.prototype.area = function() {
    // A=s^2
    return Math.pow(this.size, 2);
};
Square.prototype.circumference = function() {
    // Cf=4s
    return 4 * this.size;
};


// Create new circle instances
let c = new Circle(radius = 4, location = new Point(3, 3), color = "red");
console.log("Circle Area:", c.area());
console.log("Circle Circumference:", c.circumference());
console.log("Circle Color", c.color);


// Create new squre instances
let s = new Square(size = 10, location = new Point(90, 64), color = "green");
console.log("Square Area:", s.area());
console.log("Square Circumference:", s.circumference());
console.log("Square Color", s.color);


// Get the distance between two shapes
let distanceBetweenCS = c.location.getDistance(s.location);
console.log(`Distance between the circle and square = ${distanceBetweenCS}`);