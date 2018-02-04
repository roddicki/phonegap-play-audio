# PhoneGap audio player 

A Phonegap project that is a simple API for playing audio files on Android and iOS

This projects aims to give some simple HTML5 style functionality to the audio playback for the phonegap/cordova media plugin https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media/index.html

## Usage
Create a new phonegap project using Phonegap cli or desktop app. 
Replace the www directory with this demo / working repository (it includes test audio files).

audio-player.js file should be added to index.html 
	
	<script type="text/javascript" src="js/audio-player.js"></script>

##audio.play
To play audio use the following inside the 'deviceready' function

	audio.play("path/to/my/audioFile.mp3");

The path to the audioFile should be configured from the www directory

(typically these would be triggered by an event listener)

It is possible to use multiple audio files with multiple instances of audio.play without conflict. Triggering multiple files to play will result in overlapping audio playback.

	audio.play("path/to/my/audioFile1.mp3"); 
	audio.play("path/to/my/audioFile2.mp3"); 

##audio.pause
To pause an audio file use the following inside the 'deviceready' function

	audio.pause("path/to/my/audioFile.mp3");

The path to the audioFile should be configured from the www directory

##audio.getDuration
To get the duration of an audio file add the following inside the 'deviceready' function

	audio.getDuration("path/to/my/audioFile.mp3");

The path to the audioFile should be configured from the www directory

##audio.seekTo
To go to a specific point in an audio file add the following inside the 'deviceready' function

	audio.seekTo("path/to/my/audioFile.mp3", milliseconds);

The path to the audioFile should be configured from the www directory

##audio.getCurrentPosition
To return the current position of an audio file that is playing add the following inside the 'deviceready' function

	audio.getCurrentPosition("path/to/my/audioFile.mp3", milliseconds);

The path to the audioFile should be configured from the www directory
If the audio is not playing 0 will be returned

## android-minSdkVersion (Android only)

Minimum SDK version supported on the target device. Maximum version is blank by default.

This template sets the minimum to `14`.

    <preference name="android-minSdkVersion" value="14" />

## &lt;access ...&gt; (All)

This template defaults to wide open access.

    <access origin="*" />

It is strongly encouraged that you restrict access to external resources in your application before releasing to production.

For more information on whitelist configuration, see the [Cordova Whitelist Guide][cordova-whitelist-guide] and the [Cordova Whitelist Plugin documentation][cordova-plugin-whitelist]

## [www/index.html][index-html]

## Content Security Policy (CSP)

The default CSP is similarly open:

    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *" />

Much like the access tag above, you are strongly encouraged to use a more restrictive CSP in production.

A good starting point declaration might be:

    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: 'unsafe-inline' https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *" />

For more information on the Content Security Policy, see the [section on CSP in the Cordova Whitelist Plugin documentation][cordova-plugin-whitelist-csp].

Another good resource for generating a good CSP declaration is [CSP is Awesome][csp-is-awesome]


[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com

## Generate icons

Generate icons from a 1024px x 1024px master at http://pgicons.abiro.com/
