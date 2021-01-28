// SahpeObject
class Shape {
    constructor(ShapeName, color) {
        this.name = ShapeName;
        this.color = color;
    }
    area() {
    }
    circumference() {
    }
}


// PointObject
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance(point) {
        // d=√((x_2-x_1)²+(y_2-y_1)²)
        return Math.sqrt(Math.pow(point.y - this.y, 2) + Math.pow(point.x - this.x, 2));
    }
    static parse(object){
        return new point(object.x, object.y);
    }
}


// CircleObject
class Circle extends Shape {
    constructor(radius, location, color) {
        // Default parameters: Call the super class
        super("Circle", color);

        // Properties
        this.radius = radius;
        this.location = location;
    }


    // Set getter and setter
    get location () {
        return location;
    }
    set location (input) {
        if (input instanceof Point)
            location = input;
        else 
            location = Point.parse(input);
    }
    get diameter() {
        return this.radius * 2;//D=2r
    }

    
    // Method
    toString() {
        return `Circle with radius ${this.radius}`;
    }
    // Overriding: re-implementing the Parent methods 
    area() {
        // A=πr2
        return Math.PI * Math.pow(this.radius, 2);
    }
    circumference() {
        // Cf=2πr
        return Math.PI * this.diameter;
    }

    // Static method
    static help() {
        return `
            @param {radius}: float
            @param {location} : Point {x, y}
            @param {color} : string

            @fuction {toString} 
                @return {str}: string

            @fuction {area} 
                @return {A}: float

            @fuction {circumference} 
                @return {CF}: float
        `;
    }
}



// SquareObject
class Square extends Shape {
    constructor(size, location, color) {
        super("Square", color);
        this.size = size;
        this.location = location;
    }
    
    
    get location () {
        return location;
    }
    set location (input) {
        if (input instanceof Point)
            location = input;
    }


    toString() {
        return `Square with Side Length ${this.size}`;
    }
    area() {
        // A=s^2
        return Math.pow(this.size, 2);
    }
    circumference() {
        // Cf=4s
        return 4 * this.size;
    }
}



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

console.log(Circle.help());