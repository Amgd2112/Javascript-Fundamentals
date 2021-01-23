// Abstraction: Hide the details and show the essentials
function Circle(radius) {
    this.radius = radius;
    this.area = Math.PI * Math.pow(this.radius, 2);// A=πr2
    this.diameter = this.radius * 2; //D=2r
    this.circumference = 2 * Math.PI * this.radius; // Cf=2πr
    
    //accessable in this scope ==> private property 
    let defaultLocation = {
        x:0,
        y:0
    }; 

    //private method
    let confirm = function(){
        console.log(`The circle has been properly established at the location`, defaultLocation);
    };
    confirm();

}

//create new circle
let c = new Circle(4);

//get properties of an object // see the hidden property ?
console.log(Object.keys(c));
