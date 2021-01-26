// SahpeObject
var Shape = function(height, width){
    this.height = height;
    this.width = width;
};

Shape.prototype.area = function(){
    return this.height * this.width;
};

Shape.prototype.circumference = function(){
    return this.height + this.width;
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
var Circle = function(radius, location){
    this.radius = radius;
    this.diameter = this.radius * 2; //D=2r
    this.location = location;
    Object.defineProperty(this, "location", {
        get: function(){
            return location;
        },
        set: function(input){
            if(input instanceof Point)
                location = input;
        }
    });
}

Circle.prototype.toString = function(){
    return `Circle with radius ${this.radius}`;
};




// Circle --> Shape --> ObjectBase
Circle.prototype = Object.create(Shape.prototype);// Prototypical inheritance

// See if Circle inherit area and circumference fuction
console.log('area' in Circle.prototype);
console.log('circumference' in Circle.prototype);

// Giving Circle() a new area() function
Circle.prototype.area = function() {
    // A=πr2
    return Math.PI * Math.pow(this.radius, 2);
};

// Giving Circle() a new circumference() function
Circle.prototype.circumference = function() {
    // Cf=2πr
    return Math.PI * this.diameter;
};



let c = new Circle(4, new Point(0, 10));
console.log(c.area());
console.log(c.circumference());

// Returns all members (instance + prototype)
for(let key in c) console.log(key); 