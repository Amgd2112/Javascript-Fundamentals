const amgd = {
    //attributes, properities
    name: {
        first: "Amgad",
        mid: "Hussein",
        last: "Al-domiaty",
    },
    age:21,
    sex:"male",

    //methods, actions
    greating(){console.log("Hello,", this.name.first, this.name.last);}
    // greating: function() {
    //     console.log("Hello,", this.name.first, this.name.last);
    // }
};

amgd.greating();
