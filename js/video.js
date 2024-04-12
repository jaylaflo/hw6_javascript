var video = document.querySelector("video");

window.addEventListener("load", function() {
    console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    // Calculate the new time after skipping ahead by 10 seconds
    var newTime = video.currentTime + 10;
    
    // If the new time exceeds the video duration, restart the video from the beginning
    if (newTime >= video.duration) {
        video.currentTime = 0; // Restart from the beginning
        console.log("Restarted video");
    } else {
        video.currentTime = newTime; // Skip ahead by 10 seconds
        console.log("Current time is " + video.currentTime);
    }
});


document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted == false) {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
        console.log("Muted");
    } else {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
        console.log("Unmuted");
    }
});

document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log("Volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original");
});














