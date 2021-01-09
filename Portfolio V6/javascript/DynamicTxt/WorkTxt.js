var i = 0;
const ChangeTxt = document.querySelector(".ChangerWork");

var WorkWords = [
    "<span class='ChangerWork'>websites</span>",//0
    "<span class='ChangerWork'>web designs</span>",//1
    "<span class='ChangerWork'>logos</span>",//2
    "<span class='ChangerWork'>animations</span>",//3
    "<span class='ChangerWork'>apps</span>",//5
    "<span class='ChangerWork'>webapps</span>",//6
    "<span class='ChangerWork'>programs</span>"//7
];

//Work
function _changeTextWork() {
    if (i < WorkWords.length) {
        ChangeTxt.innerHTML = WorkWords[i];
        i++;
    }
    else {
        i = 0;
    }  
}
setInterval("_changeTextWork()", 2500);