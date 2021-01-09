window.addEventListener("load", function () {
    var load_screen = document.getElementById("loadingScreen");
    document.querySelector("body").style.overflow = "hidden";
    setTimeout(function () {
        document.body.removeChild(load_screen);
        document.querySelector("body").style.overflow = "visible";

    }, 80);

});

