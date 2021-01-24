var Stopwatch = function(){
    let startTime, endTime, running=false, duration = 0;

    Object.defineProperty(this, "startTime", {
        get: function(){
            return startTime;
        },
        set : function(input){
            startTime = input;
        }
    });

    Object.defineProperty(this, "endTime", {
        get: function(){
            return endTime;
        },
        set : function(input){
            endTime = input;
        }
    });
    Object.defineProperty(this, "running", {
        get: function(){
            return running;
        },
        set : function(input){
            running = input;
        }
    });
    Object.defineProperty(this, "duration", {
        get: function(){
            return duration;
        },
        set : function(input){
            duration = input;
        }
    });
}


Stopwatch.prototype.start = function(){
    if(this.running)
        throw new Error("The stopwatch already started.")

    this.startTime = new Date().getTime();
    this.running = true;
}

Stopwatch.prototype.reset = function(){
    this.duration = 0;
}

Stopwatch.prototype.stop = function(){
    if(!this.running)
        throw new Error("The stopwatch did not start.")

    this.endTime = new Date().getTime();
    this.duration = (this.endTime - this.startTime) / 1000;
    this.running = false;
}

// Now the stopwatch is unreliable because the inner properties as exposed and can be modified.