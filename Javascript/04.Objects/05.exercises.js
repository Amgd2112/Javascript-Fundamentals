// Exercise1
let address = {
    street:"Three-schools",
    city:"Port-fuad",
    zipCode:52343
};

showAddress(address);
function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}


// Exercise2
let address2 = defineFactoryAddress(address.street, address.city, address.zipCode);
address2.showAddress();

function defineFactoryAddress(street, city, zipCode){
    return {
        address:{
            street,
            city,
            zipCode,
        },
        showAddress(){
            for(let key in this.address){
                console.log(key, this.address[key]);
            }
        }
    };
}

let address3 = new DefineConstractorAddress(address.street, "Portsaid", address.zipCode);
address3.showAddress();

function DefineConstractorAddress(street, city, zipCode){
    this.address = {
        street:street,
        city:city,
        zipCode:zipCode
    };
    this.showAddress = function(){
        for(let key in this.address)
            console.log(key, this.address[key]);
    };
}


// Exercise3
console.log(areEqual(address2, address3));

function areEqual(address1, address2){
    for (let key in address1.address){
        if (address1.address[key] !== address2.address[key]) return false;
    }
    return true;
}


// Exercise4
function Post(title, body, author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}