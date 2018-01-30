document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    
   	//event listeners for 'play' and 'pause' buttons
    document.getElementById("play-btn-one").addEventListener("click", function(){
        audio.play("audio/abcd.mp3");
    });

    document.getElementById("play-btn-two").addEventListener("click", function(){
        audio.play("audio/white-christmas.mp3");
    });

    document.getElementById("play-btn-three").addEventListener("click", function(){
        audio.play("audio/alphaOmega.mp3");
    });

    document.getElementById("play-btn-four").addEventListener("click", function(){
        audio.play("audio/xyz.mp3");
    });

    document.getElementById("play-btn-five").addEventListener("click", function(){
        audio.play("audio/1234.mp3");
    });

    //event listener for 'pause' button
    document.getElementById("pauseBtn").addEventListener("click", function(){
        audio.pause();
    });

//end device ready
});





	



