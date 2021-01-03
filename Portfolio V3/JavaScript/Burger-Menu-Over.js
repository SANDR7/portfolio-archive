function MenuOpenO() {
    // Burger Menu
        document.getElementById("BG-Menu").style.marginTop = "0px";
    //Geopend menu
    document.getElementById("Dropdown").style.opacity = "1";
    document.getElementById("Dropdown").style.marginTop = "320px";
    document.getElementById("Nav-Onder-Effect").style.marginLeft = "0px";
    document.getElementById("Nav-Onder-Effect2").style.top = "768px";


    // Navigatie Categoriën 
    document.getElementById("Opl").style.opacity = "1";
    document.getElementById("Toe").style.opacity = "1";
    document.getElementById("Por").style.opacity = "1";

   // credits naar Connner
   document.getElementById("LogoC").style.opacity = "1";


}
function MenuDichtO() {
    // Burger Menu
        document.getElementById("BG-Menu").style.marginTop = "-375px";
    //Geopend menu
    document.getElementById("Dropdown").style.opacity = "0";
    document.getElementById("Dropdown").style.marginTop = "250px";
    document.getElementById("Nav-Onder-Effect").style.marginLeft = "-210px";
    document.getElementById("Nav-Onder-Effect2").style.top = "1200px";


    // Navigatie Categoriën 
    document.getElementById("Opl").style.opacity = "0";
    document.getElementById("Toe").style.opacity = "0";
    document.getElementById("Por").style.opacity = "0";

    // credits naar Connner
   document.getElementById("LogoC").style.opacity = "0";

}
