const circle = function(radius){
    return {
        radius,
        // A=πr2
        Area() {
            return Math.PI * Math.pow(this.radius, 2);
        }
    };
} 

let c1 = circle(4);
// console.log(c1.Area());

let objectBase = Object.getPrototypeOf(c1);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

// writable: true ==> It can be modified
// enumerable: false ==> The object key can be accessed
// configurable: true ==> It can be deteted

c1.radius = 10;
console.log(Object.keys(c1));
console.log(c1.radius);

Object.defineProperty(c1, "radius", {
    // By default these attributes set to true
    writable:false,
    enumerable:false,
    configurable:false
});

delete c1.radius;
c1.radius = 10;
console.log(Object.keys(c1));
console.log(c1.radius);
