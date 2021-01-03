button.onclick = function(){
    if(content.className == "open")
    content.className = "";
    button.innerHTML = "";
} else {
  content.className= "open";
  button.innerHTML = "";
}
