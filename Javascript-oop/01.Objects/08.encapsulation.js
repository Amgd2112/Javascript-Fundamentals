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
        this.area = Math.PI * Math.pow(this.radius, 2);// A=πr2
        this.diameter = this.radius * 2; //D=2r
        this.circumference = 2 * Math.PI * this.radius; // Cf=2πr 
        

        //hidden property
        let location = new Point(0, 0);//default location
        //encapsulation=> getter and setter
        Object.defineProperty(this, "location", {
            //read
            get: function(){
                return location;
            },
            //modify
            set: function(input){
                if(input instanceof Point)
                    location = input
            }
        });
    }
}

//create new circle
let c = new Circle(4);

//get properties of an object
console.log(Object.keys(c));//location property is not accessable 

c.location = {x:10, y:0};//change the location 
console.log(c.location);

c.location = new Point(10, 0);
console.log(c);