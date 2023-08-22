
const menu1 = document.getElementById("menu1"); 
const btn1 = document.getElementById("btn1");

function showMenu1() {
    menu1.style.display = "block";    
    btn1.setAttribute("onClick", "closeMenu1()");

}

function closeMenu1() {
    menu1.style.display = "none";
    btn1.setAttribute("onClick", "showMenu1()");
}


const menu2 = document.getElementById("menu2"); 
const btn2 = document.getElementById("btn2");
const body = document.querySelector("body");


function showMenu2() {
    menu2.style.display = "block"; 
      
}

btn2.addEventListener("click", showMenu2);

document.addEventListener("DOMContentLoaded", showMenu2);

const closeMenus = 
document.getElementsByClassName("closemenu");

var n;
for (n = 0; n < closeMenus.length; n++) {
    closeMenus[n].addEventListener("click",
    function() {
        
        this.style.backgroundColor = "blue";
        this.parentElement.style.display = "none";
    });
}

function showMenu2() {
    menu2.style.display = "block"; 
      
}





/* 
btn2.addEventListener("click", function() {
    menu2.style.display = "block"; 
}); */