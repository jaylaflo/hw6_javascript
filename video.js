var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Page load
// Initialize the video element and turn off autoplay and turn off looping.

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#video1");
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}
);
// Play Button
// Play the video and update the volume information.

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#video1");
	console.log("Pause Video");
	video.pause();
}
);
// Pause Button
// Pause the video.

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#video1");
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
}
);
// Slow Down Button
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#video1");
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
}
);
// Speed Up Button
// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#video1");
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log("fast forward");
	} else {
		video.currentTime += 15;
		console.log("Current time is " + video.currentTime);
	}
}
);
// Skip Ahead Button
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

// Mute
// Mute/unmute the video and update the text in the button.

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#video1");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
}
);

// Volume Slider
// Change the volume based on the slider and update the volume information.

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video = document.querySelector("#video1");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume);
}
);

// Styled
// Utilize the existing oldSchool class on the video element

document.querySelector("#old").addEventListener("click", function() {
	video = document.querySelector("#video1");
	video.classList.add("oldSchool");
	console.log("Old School");
}
);

// Original
// Remove the oldSchool class from the video.

document.querySelector("#original").addEventListener("click", function() {
	video = document.querySelector("#video1");
	video.classList.remove("oldSchool");
	console.log("Original");
}
);













