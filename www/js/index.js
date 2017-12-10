document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');
    
   	//event listeners for 'play' and 'pause' buttons
    document.getElementById("play-btn-one").addEventListener("click", function(){
        audio.play("audio/airloom_intro.mp3");
    });

    document.getElementById("play-btn-two").addEventListener("click", function(){
        audio.play("audio/white-christmas.mp3");
    });

    //event listener for 'pause' button
    document.getElementById("pauseBtn").addEventListener("click", function(){
        audio.pause();
    });

//end device ready
});





	



