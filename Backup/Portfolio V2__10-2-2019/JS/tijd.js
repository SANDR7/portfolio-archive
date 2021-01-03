$(function() {
	"use strict";
      var d = new Date();
      var x = document.getElementById("Introtext");
      var h = d.getHours();

    if (h > 6 && h < 12 ) {
        x.innerHTML = "Goedemorgen";
    }
    if (h > 12 && h < 16) {
          x.innerHTML = "Goedemiddag";
    }
    if (h > 16) {
           x.innerHTML = "Goedenavond";
    }
    if (h > 0 && h < 6) {
           x.innerHTML = "Goedenacht";
    }
});
