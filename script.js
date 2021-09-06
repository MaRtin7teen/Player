const audio = document.getElementById("audio");
const soundControl = document.getElementById("soundControl");
const playControl = document.getElementById("playControl");
const fastForward = document.getElementById("fastForward");
let audioPlay = false;

const sound = () => {
    if (audio.muted === false) {
        soundControl.innerHTML = "on";
        audio.muted = true;
    }
    else {
        soundControl.innerHTML = "off";
        audio.muted = false;
    }
}

const play = () => {
    if (audioPlay === false) {
        audio.play();
        playControl.innerHTML = "pause";
        audioPlay = true;
        fastForward.disabled = false;
        console.log(audioPlay, "playing", audio.currentTime);
    }
    else {
        audio.pause();
        playControl.innerHTML = "play";
        audioPlay = false;
        console.log(audioPlay, "paused", audio.currentTime);
    }
}

const forward = () => {
    if (audio.currentTime < audio.duration) {
        audio.currentTime = audio.currentTime + 5;
        console.log(audioPlay, audio.duration, "fastforwarded", audio.currentTime);
    }
    else {
        fastForward.disabled = true;
    }
}

const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    playControl.innerHTML = "play";
    audioPlay = false;
    fastForward.disabled = false;
    console.log(audioPlay, "stopped", audio.currentTime);
}

