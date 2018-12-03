console.log('halló! þetta virkar')

var header = document.querySelector(`header`);
var main = document.querySelector(`main`);
var footer = document.querySelector(`footer`);

//Það sem gerist þegar ég kem fyrst inn á síðuna:
header.innerHTML = templates.header;
main.innerHTML = templates.jogatimar;
main.innerHTML = templates.staktNamskeid;
main.innerHTML = templates.about;
main.innerHTML = templates.forsida;
footer.innerHTML = templates.footer;

//Stök section sem eru inni á sumum síðum
var containerinn = document.querySelector(`.container`);
containerinn.innerHTML += templates.skraning;
containerinn.innerHTML += templates.iconSection;
containerinn.innerHTML += templates.postListi;

//Undirsíðurnar sem ég vil að birtist
var showJogatimar = document.getElementById("jogatimar");
var showKennaranam = document.getElementById("kennaranam");
var showStundaskra = document.getElementById("stundaskra");
var showVerdskra = document.getElementById("verdskra");
var showJogasetrid = document.getElementById("jogasetrid");
var showKundalini = document.getElementById("kundalini");

showJogatimar.onclick = function(){
    main.innerHTML = templates.jogatimar;   
}
showJogasetrid.onclick = function(){
    main.innerHTML = templates.about;   
}
showKundalini.onclick = function(){
    main.innerHTML = templates.staktNamskeid;  
}

//Og svo gera forlúppu með arrays of objects og þannig...
// Sjá undir namskeid.js

// var burger = document.querySelector(".burgerContainer");
// var menu = document.querySelector(".menu");
// var burgerLines = document.getElementsByClassName("burger");
// var navIsOpen = false;

// burger.onclick = function(){
//     if(!navIsOpen){
//         menu.classList.add("show-menu");
//         burgerLines[0].classList.add("tilt-right");
//         burgerLines[2].classList.add("tilt-left");
//         for (var i = 0; i < burgerLines.length; i++) {
//             burgerLines[i].classList.add("change-to-x")
//         }
//         navIsOpen = true;
//     }
//     else{
//         menu.classList.remove("show-menu");
//         burgerLines[0].classList.remove("tilt-right");
//         burgerLines[2].classList.remove("tilt-left");
//         for (var i = 0; i < burgerLines.length; i++) {
//             burgerLines[i].classList.remove("change-to-x")
//         }
//         navIsOpen = false;
//     }   
// }