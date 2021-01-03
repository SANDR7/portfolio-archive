$(function() {
      var d = new Date();
      var x = document.getElementById("IntroHeader");
      var h = d.getHours();

    if (h > 6 && h < 12 ) {
        x.innerHTML = "Goedemorgen";
       document.getElementById("IntroText").style.top = "205px";

    }
    if (h > 12 && h < 17) {
          x.innerHTML = "Goedemiddag";
              document.getElementById("IntroText").style.top = "205px";

    }
    if (h > 17) {
           x.innerHTML = "Goedenavond";
              document.getElementById("accent-Intro").style.top = "165px";
              document.getElementById("IntroText").style.top = "190px";


    }
    if (h > 0 && h < 6) {
           x.innerHTML = "Goedenacht";
              document.getElementById("accent-Intro").style.top = "165px";
              document.getElementById("IntroText").style.top = "190px";

    }
});
