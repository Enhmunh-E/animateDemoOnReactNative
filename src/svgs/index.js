let smallcontainer = document.getElementById("smallcontainer");
let bottomBg = document.getElementById("bottombg");
let player = document.getElementById("player");
let track = document.getElementById("track");
let pause = document.getElementById("pause");
let rectangles = document.getElementById("rectangles");
const mover = () => {
    var animated = document.getElementsByClassName("animated"), len = animated !== null ? animated.length : 0;
    if (smallcontainer.classList.contains("afterMoveContainer")) {
        bottomBg.classList.remove("biggerbg");
        player.classList.remove("bigPlayer")
        smallcontainer.classList.remove("afterMoveContainer")
        track.classList.remove("noanimation");
        track.classList.remove("aftertrack");
        rectangles.classList.remove("afterrectangles");
        pause.classList.remove("afterpause");
        // for(let i = 0; i < len; i++) {
        //     setTimeout(() => {
        //         animated[i].classList.remove("noanimation"); 
        //     }, [3000])
        // }
    }else {
        bottomBg.classList.add("biggerbg");
        player.classList.add("bigPlayer")
        smallcontainer.classList.add("afterMoveContainer");
        track.classList.add("noanimation")
        track.classList.add("aftertrack")
        rectangles.classList.add("afterrectangles");
        pause.classList.add("afterpause");
        // for(let i = 0; i < len; i++) {
        //     setTimeout(() => {
        //         animated[i].classList.add("noanimation"); 
        //     }, [3000])
        // }
    }
}