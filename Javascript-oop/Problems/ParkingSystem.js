/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};


/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let available = false;

    if(carType == 1){
        if(this.big){
            this.big -= 1;
            available = true;
        }
    } else if(carType == 2){
        if(this.medium){
            this.medium -= 1;
            available = true;
        }
    } else {
        if(this.small){
            this.small -= 1;
            available = true;
        }
    }

    return available;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */