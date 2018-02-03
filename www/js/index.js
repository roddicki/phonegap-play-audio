document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    document.getElementById("deviceready").innerHTML = "device ready";
    

    // Play audio
    //
    function playAudio(url) {
        // Play the audio file at url
        var my_media = new Media(url,
            // success callback
            function () { console.log("playAudio():Audio Success"); },
            // error callback
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );

        // Play audio
        my_media.play();

        // Pause after 10 seconds
        setTimeout(function () {
            my_media.pause();
        }, 7000);
    }


    //MEDIA PLUGIN FUNCTIONS
    //get the file location path for each device type
    function getPhoneGapPath() {
        var path = "";
        //for testing only
        loc = window.location.pathname;
        path = loc.substr(0,loc.length-10);
        console.log(path);
        //end testing
        
        /* uncomment for build
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory, 
            function (fileEntry) {
                path = fileEntry.toURL();
                console.log(path);
            }, 
            function (e) {
                console.log("FileSystem Error");
                console.log(JSON.stringify(e) );
            }
        );
        console.log(path);*/
        return path;
    }

    playAudio(getPhoneGapPath() + "audio/drums.mp3");











/*   	//event listeners for 'play' and 'pause' buttons
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
    });*/
    

//end device ready
});





	



