function location (x, y){
    return {
        x,
        y
    };
}

function circle(radius, location){
    return {
        radius,
        location,
        // A=πr2
        Area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    };
} 

let c = circle(4, location(101, 404));

console.log(c);
console.log(c.Area());
