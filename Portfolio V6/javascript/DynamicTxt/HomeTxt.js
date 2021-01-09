var i = 0;
const ChangeTxt = document.querySelector(".ChangerHome");

var HomeWords = [
    "<span class='ChangerHome'>website<span>", //0
    "<span class='ChangerHome'>life's work<span>", //1
    "<span class='ChangerHome'>hobby<span>", //2
    "<span class='ChangerHome'>CV<span>", //3
    "<span class='ChangerHome'>design<span>", //4
    "<span class='ChangerHome'>passion<span>", //5
    "<span class='ChangerHome'>progress<span>", //6
    "<span class='ChangerHome'>place<span>", //7
    "<span class='ChangerHome'>style<span>", //8
    "<span class='ChangerHome'>field<span>", //9
    "<span class='ChangerHome'>journey<span>", //10
    "<span class='ChangerHome'>style<span>", //12
    "<span class='ChangerHome'>profession<span>", //13
    "<span class='ChangerHome'>project<span>", //14
    "<span class='ChangerHome'>creativity<span>", //15
    "<span class='ChangerHome'>base<span>", //16
    "<span class='ChangerHome'>adventure<span>", //17
    "<span class='ChangerHome'>life<span>", //18
];

// Home 
function _changeTextHome() {
    if (i < HomeWords.length) {
        ChangeTxt.innerHTML = HomeWords[i];
        i++;
    }
    else {
        i = 0;
    }    
}

setInterval(_changeTextHome, 2500);