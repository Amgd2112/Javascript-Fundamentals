// With composition, you could have factories that create an object

var Item = function(itemName, color, material){
    this.itemName = itemName;
    this.color = color;
    // material: metal, plastic, glass and wood
    this.material = material;
};

function needElectricity(voltage, current, connectionType){
    return {
        // type: wired or wireless
        connectionType,
        voltage,
        current,
        get resistance(){ 
            return voltage/current;
        },
    };
}

function lighting(color){
    return {
        lightColor : color,
        light: () => console.log("BoOom")
    };
}

function flexible(){
    return {
        squasheIn : () => console.log("Who's the potato, Now!"),
        squasheOut : () => console.log("Pasta with potatoes")
    };
}

function hanging(where, by){
    return {
        where,
        by,
        let : () => console.log("You are down :(")
    };
}

function holding(maxSize){
    return {
        // size (in kilogram)
        maxSize,
        hold : function (item) {
            if (item.weight <= this.maxSize) console.log("You are perfect");
            else console.log("I can't hold you anymore");
        }
    };
}

// inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
/**
 * composition
 * @function mixin(targetObject, ...compositions){
 *      @Object.assign(targetObject.prototype, ...compositions);
 * }
 */



//LampObject
var Lamp = function(lampName, color, material, diameter, coverInteriorSpaces, ...behaviors){
    // Call super class
    Item.call(this, itemName = lampName, color = color, material = material)

    // space (in meter)
    this.coverInteriorSpaces = coverInteriorSpaces;
    // diameter (in centimeter)
    this.diameter = diameter;

    // composition
    return Object.assign({}, this, ...behaviors);
};
extend(Lamp, Item);


//CarpetObject
var Carpet = function(carpetName, color, material, height, width, ...behaviors) {
    Item.call(this, itemName = carpetName, color = color, material = material)
    // size (in centimeter)
    this.size = {
        height,
        width
    };
    return Object.assign({}, this, ...behaviors);
};
extend(Carpet, Item);


//CarpetObject
var Sofa = function(sofaName, color, material, height, width, lenght, weight, ...behaviors) {
    Item.call(this, itemName = sofaName, color = color, material = material)
    // size (in centimeter)
    this.size = {
        height,
        width,
        lenght
    };
    // size (in kg)
    this.weight = weight;
    return Object.assign({}, this, ...behaviors);
};
extend(Sofa, Item);


let venus = new Lamp("A25", "white", "glass", 19/8, 20, needElectricity(9, 3, "wired"), 
    lighting("white"), hanging("wall", "screws"));
console.log(venus.resistance);
venus.let();

let sofa = new Sofa("sofa-bed", "dark-grey", "plywood", 82, 41, 141, 35, holding(80));
console.log(sofa.weight);

let carpet = new Carpet("havana", "blue-green", "shaggy", 200, 270, flexible(), holding(110));
carpet.hold(sofa);
