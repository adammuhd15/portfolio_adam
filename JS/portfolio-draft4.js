var wOne = document.getElementById("profile-pic");

window.addEventListener("scroll", function(){
    if (window.scrollY >= wOne.offsetTop-400) {
        wOne.style.opacity = 1;
        wOne.style.animation = "fadeInBox 0.5s";
    }
    else {
        wOne.style.opacity = 0;
        wOne.style.animation = "fadeOutBox 0.5s";
    }
});