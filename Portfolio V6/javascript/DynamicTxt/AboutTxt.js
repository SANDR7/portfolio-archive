var i = 0;
const ChangeTxt = document.querySelector(".ChangerAbout");

var AboutWords = [
    "<span class='ChangerAbout'>creative</span>", //0
    "<span class='ChangerAbout'>trustworthy</span>", //1
    "<span class='ChangerAbout'>reliable</span>", //2
    "<span class='ChangerAbout'>organized</span>", //3
    "<span class='ChangerAbout'>crazy</span>", //4
    "<span class='ChangerAbout'>experienced</span>", //6
    "<span class='ChangerAbout'>programming</span>", //7
    "<span class='ChangerAbout'>healthy</span>", //8
    "<span class='ChangerAbout'>friendly</span>", //9
    "<span class='ChangerAbout'>flexible</span>", //10
    "<span class='ChangerAbout'>active</span>", //11
    "<span class='ChangerAbout'>busy</span>", //12
    "<span class='ChangerAbout'>nice</span>", //13
    "<span class='ChangerAbout'>focused</span>", //14
    "<span class='ChangerAbout'>responsible</span>", //15
    "<span class='ChangerAbout'>loyal</span>", //16
    "<span class='ChangerAbout'>self-aware</span>", //17
    "<span class='ChangerAbout'>practical</span>", //18
    "<span class='ChangerAbout'>funny</span>", //19
    "<span class='ChangerAbout'>clear</span>", //20
    "<span class='ChangerAbout'>curious</span>", //21
    "<span class='ChangerAbout'>picky</span>", //22
    "<span class='ChangerAbout'>smart</span>", //23
    "<span class='ChangerAbout'>a developer</span>" //24
];

//About
function _changeTextAbout() {
    if (i < AboutWords.length) {
        ChangeTxt.innerHTML = AboutWords[i];
        i++;
    }
    else {
        i = 0;
    }   
}
setInterval("_changeTextAbout()", 2500);