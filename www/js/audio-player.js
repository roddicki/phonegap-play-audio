var audio = {
	fileName: "",
	isPlaying: false,
	audioObject: "",
	getDevicePath: function() {
	    var path = window.location.pathname;
	    var sizefilename = path.length - (path.lastIndexOf("/")+1);
	    path = path.substr( path, path.length - sizefilename );
	    return path;
	},
	createAudioObject: function() {
		var url = audio.getDevicePath() + audio.fileName;
		console.log("\nfileppath used\n" + url);
	    var mediaObject = new Media(url,
	            // success callback
	            function () { console.log("playAudio():Audio Success"); },
	            // error callback
	            function (err) { console.log("playAudio():Audio Error: " + JSON.stringify(err) ); }
	    );
	    console.log(JSON.stringify(mediaObject));
	    return mediaObject;
	},
	play: function(filepath) {
		if (audio.isPlaying) {
			audioObject.pause();
		};
		audio.fileName = filepath;
		audioObject = audio.createAudioObject();
		audioObject.play();
		audio.isPlaying = true;
	}, 
	pause: function(){
		audioObject.pause();
		audioObject.isPlaying = false;
	}
};