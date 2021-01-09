var i = 0;
const ChangeTxt = document.querySelector(".ChangerContact");

var ContactWords = [
    "<span class='ChangerContact'>contact me</span>", //0
    "<span class='ChangerContact'>ask for advice</span>", //1
    "<span class='ChangerContact'>ask me something</span>", //2
    "<span class='ChangerContact'>hire me</span>", //3
    "<span class='ChangerContact'>talk with me</span>", //4
    "<span class='ChangerContact'>have a conversation</span>", //5
];

//Contact
function _changeTextContact() {
    if (i < ContactWords.length) {
        ChangeTxt.innerHTML = ContactWords[i];
        i++;
    }
    else {
        i = 0;
    }   
}
setInterval("_changeTextContact()", 1500);