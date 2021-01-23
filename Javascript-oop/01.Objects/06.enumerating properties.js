class Circle {
    constructor(radius) {
        this.radius = radius;
        this.area = Math.PI * Math.pow(this.radius, 2);// A=πr2
        this.diameter = this.radius * 2; //D=2r
        this.circumference = 2 * Math.PI * this.radius; // Cf=2πr 
    }
}

//create new circle
let c = new Circle(4);

//get properties of an object
console.log(Object.keys(c));

//iterate over an object
for(let property of Object.keys(c)){
    console.log(property, c[property]);
}

//check if a property exist
let exist = "radius" in c;
console.log(exist);