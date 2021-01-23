const circle = {
    radius: 5,
    
    location: {
        x: 101,
        y: 500
    },
    
    Area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(circle.Area());