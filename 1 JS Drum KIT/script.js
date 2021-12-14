
let k=document.getElementsByClassName("key");
function playsound(e){
    
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime=0;  
        // starts without completing first when pressed
        audio.play();
        // plays audio 
        key.classList.add("playing");
}

function remove1(e){
    if(e.propertyName !=="transform") return;
    // Skip if its not a transform
    this.classList.remove("playing");
}

const keys=document.querySelectorAll(".key");
keys.forEach(key=> key.addEventListener("transitionend",remove1));
// transitionend gets an element having transitions.

window.addEventListener('keydown',playsound);

