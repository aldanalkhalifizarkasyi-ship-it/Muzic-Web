let mylove = document.getElementById("MyLoveSong");
let myloveSong = new Audio("Songs/MyLove.mp3")

mylove.addEventListener("click", function(){
    if (myloveSong.paused) {
        mylove.setAttribute("src", "Images/pauseimg.png")
        myloveSong.play()
    } else {
        mylove.setAttribute("src", "Images/playimg.png")
        myloveSong.pause();
    }
    // myloveSong.currentTime = 0
    // myloveSong.play();
})
