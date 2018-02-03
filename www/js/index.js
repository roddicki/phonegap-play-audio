document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    
   	//event listeners for 'play' and 'pause' buttons
    //play audio file
    //audio.play("audio/oboe.mp3");
    document.getElementById("play-btn-one").addEventListener("click", function(){
        audio.play("audio/oboe.mp3");
    });

    //pause audio file
    //audio.pause("audio/oboe.mp3");
    document.getElementById("pause-one").addEventListener("click", function(){
        audio.pause("audio/oboe.mp3");
    });

    //see the duration of an audio file 
    //audio.getDuration("audio/oboe.mp3");
    //only returns the duration once playing
    document.getElementById("get-duration-one").addEventListener("click", function(){
        document.getElementById("duration-one").innerHTML = audio.getDuration("audio/oboe.mp3");
    });

    //seek to / go to current position (milliseconds) within an audio file.
    //audio.seekTo("audio/oboe.mp3", 50000);
    //example: seek to 50 seconds and play
    document.getElementById("seek").addEventListener("click", function(){
        audio.seekTo("audio/oboe.mp3", 50000);
        audio.play("audio/oboe.mp3");
    });
    
    //get current position of audio file if playing
    //audio.getCurrentPosition("audio/drums.mp3");
    document.getElementById("position-one").addEventListener("click", function(){
        document.getElementById("position-one-result").innerHTML = audio.getCurrentPosition("audio/oboe.mp3");
    });

    //event listeners for 'play' and 'pause' buttons
    document.getElementById("play-btn-two").addEventListener("click", function(){
        audio.play("audio/drums.mp3");
    });

    document.getElementById("pause-two").addEventListener("click", function(){
        audio.pause("audio/drums.mp3");
    });

    //get current position of audio file if playing
    //audio.getCurrentPosition("audio/drums.mp3");
    document.getElementById("position-two").addEventListener("click", function(){
        document.getElementById("position-two-result").innerHTML = audio.getCurrentPosition("audio/drums.mp3");
    });
    

//end device ready
});





	



