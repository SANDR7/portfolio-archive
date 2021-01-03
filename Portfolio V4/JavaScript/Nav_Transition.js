/* Sub 1 is opleidingen */
/* Sub 2 is Toekomst */
/* Sub 3 is Portfolio */


/* Sub 1 is opleidingen */
function MenuOpen1() {
        document.getElementById("fas fa-graduation-cap").style.left = "280px";
        document.getElementById("Sub_Title1").style.left = "47.5px";
        document.getElementById("Sub_Title1").style.opacity = "1";
}
function MenuDicht1() {
    document.getElementById("fas fa-graduation-cap").style.left = "12px";
    document.getElementById("Sub_Title1").style.left = "-40px";
    document.getElementById("Sub_Title1").style.opacity = "0";
}

/* Sub 2 is Toekomst */
function MenuOpen2() {
    document.getElementById("fas fa-road").style.left = "280px";
    document.getElementById("Sub_Title2").style.left = "60px";
    document.getElementById("Sub_Title2").style.opacity = "1";
}
function MenuDicht2() {
document.getElementById("fas fa-road").style.left = "15px";
document.getElementById("Sub_Title2").style.left = "-20px";
document.getElementById("Sub_Title2").style.opacity = "0";
}

/* Sub 3 is Portfolio */
function MenuOpen3() {
    document.getElementById("fas fa-portrait").style.left = "310px";
    document.getElementById("Sub_Title3").style.left = "80px";
    document.getElementById("Sub_Title3").style.opacity = "1";
}
function MenuDicht3() {
document.getElementById("fas fa-portrait").style.left = "33px";
document.getElementById("Sub_Title3").style.left = "-20px";
document.getElementById("Sub_Title3").style.opacity = "0";
}