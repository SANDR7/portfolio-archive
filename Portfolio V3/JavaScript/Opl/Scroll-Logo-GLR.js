// opleidingen RGO

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("Logo-GLR").style.height = "200px";
    document.getElementById("Logo-GLR").style.top = "00px";
  } 
  else {
    document.getElementById("Logo-GLR").style.height = "500px";
    document.getElementById("Logo-GLR").style.top = "170px";
  }
}
// opleidingen GLR

