class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // d=√((x_2-x_1)²+(y_2-y_1)²)
    getDistance (point){
        return Math.sqrt(Math.pow(point.y - this.y, 2) + Math.pow(point.x - this.x, 2));
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    // A=πr2
    Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


//create new circle
let c = new Circle(4);
console.log(c.Area());

//add new property
c.location = new Point(101, 404);
console.log(c);

//access the property by bracket notation 
console.log(c["location"].getDistance(new Point(100, 400)));

//delete a property
delete c.location;
console.log(c);
