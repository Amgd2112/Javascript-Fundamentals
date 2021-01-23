// This Keyword

    // method -> obj
    // function -> global (window)

const video = {
    title:'a',
    tags:['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this); 
        // foreach is refer to function in window, so we need to pass this obj to the function to refer the current obj
    }
};

video.showTags()




//To avoid this
//Method used for object acc
function playVideo(a, b){
    console.log(this);
}

playVideo.call({name:"Amg"}, 1, 2, 4);
playVideo.apply({name:"Amg"}, [1, 2, 3]);
let fun = playVideo.bind({name:"Amg"});




//avoid 1
const video1 = {
    title:'a',
    tags:['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this)); 
    }
};
video1.showTags()

//avoid 2
const video2 = {
    title:'a',
    tags:['a', 'b', 'c'],

    // Arrow function, inherate the object
    showTags(){
        this.tags.forEach(tag => console.log(this.title, tag));
    }
};
video2.showTags()