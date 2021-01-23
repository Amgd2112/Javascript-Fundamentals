Stopwatch = function(){
    let startTime, endTime, running=false, duration = 0;

    this.start = function(){
        if(running)
            throw new Error("The stopwatch already started.")

        startTime = new Date().getTime();
        running = true;
    }

    this.reset = function(){
        duration = 0;
    }

    this.stop = function(){
        if(!running)
            throw new Error("The stopwatch did not start.")

        endTime = new Date().getTime();
        duration = (endTime - startTime) / 1000;
        running = false;
    }

    Object.defineProperty(this, "duration", {
        get: function(){
            return duration;
        }
    });
}
