var burger = document.querySelector(".hamburger-container");
var burgerLines = document.getElementsByClassName("burger");
var menu = document.querySelector(".hamburgermenu");
var navIsOpen = false;

burger.onclick = function(){
    if(!navIsOpen){
        menu.classList.add("show-menu");
        burgerLines[0].classList.add("tilt-right");
        burgerLines[2].classList.add("tilt-left");
        for (var i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.add("change-to-x")
        }
        navIsOpen = true;
    }
    else{
        menu.classList.remove("show-menu");
        burgerLines[0].classList.remove("tilt-right");
        burgerLines[2].classList.remove("tilt-left");
        for (var i = 0; i < burgerLines.length; i++) {
            burgerLines[i].classList.remove("change-to-x")
        }
        navIsOpen = false;
    }   
}