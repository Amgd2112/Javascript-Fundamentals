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
    constructor(radius, location) {
        this.radius = radius;
        this.location = location;
    }
    
    // A=πr2
    Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
} 

let c1 = new Circle(4, new Point(101, 404));
let c2 = new Circle(5, new Point(10, 28));

console.log(c2.location.getDistance(c1.location));
console.log(c2.Area());
