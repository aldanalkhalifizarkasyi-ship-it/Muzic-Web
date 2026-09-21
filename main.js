let mylove = document.getElementById("MyLoveSong");
let myloveSong = new Audio("Songs/MyLove.mp3")
let BerharapTakBerpisah = document.getElementById("BerharapTakBerpisahSong")
let BerharapTakBerpisahSong = new Audio("Songs/berharaptakberpisah.mp3")

mylove.addEventListener("click", function(){
    if (myloveSong.paused) {
        // mylove.setAttribute("src", "Images/pauseimg.png")
        mylove.style.filter = "grayscale(70%)"
        myloveSong.play()
    } else {
        // mylove.setAttribute("src", "Images/playimg.png")
        mylove.style.filter = "grayscale(0%)"
        myloveSong.pause();
    }
    // myloveSong.currentTime = 0
    // myloveSong.play();
})

BerharapTakBerpisah.addEventListener("click", function(){
    if (BerharapTakBerpisahSong.paused) {
        BerharapTakBerpisah.style.filter = "grayscale(70%)"
        BerharapTakBerpisahSong.play()
    } else {
        BerharapTakBerpisah.style.filter = "grayscale(0%)"
        BerharapTakBerpisahSong.pause()
    }
})
