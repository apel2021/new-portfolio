const menuBtn = document.getElementById("menubtn");
const sideNav = document.getElementById("header");


menuBtn.onclick = function(){
    sideNav.style.left = "0%";
}



var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});