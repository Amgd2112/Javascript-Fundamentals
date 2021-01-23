function Point (x, y){
    this.x = x;
    this.y = y
}

function Circle(radius, location){
    this.radius = radius;
    this.location = location;
    // A=πr2
    this.Area = function() {
        return Math.PI * Math.pow(this.radius, 2);
    }
} 

let c1 = new Circle(4, new Point(101, 404));
let c2 = new Circle(5, new Point(10, 28));

console.log(c1.Area());
console.log(c2.Area());
