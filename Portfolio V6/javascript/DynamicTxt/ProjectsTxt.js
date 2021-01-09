var i = 0;
const ChangeTxt = document.querySelector(".ChangerProjects");

var ProjectsWords = [
    "<span class='ChangerProjects'>do a lot</span>",//0
    "<span class='ChangerProjects'>build websites</span>",//1
    "<span class='ChangerProjects'>do stuff</span>",//2
    "<span class='ChangerProjects'>change your vision</span>",//3
    "<span class='ChangerProjects'>change your perspective</span>",//4
    "<span class='ChangerProjects'>think different</span>",//5
    "<span class='ChangerProjects'>design</span>",//6
    "<span class='ChangerProjects'>redesign</span>",//7
    "<span class='ChangerProjects'>plan ahead</span>",//8
    "<span class='ChangerProjects'>make</span>",//9
    "<span class='ChangerProjects'>break</span>",//10
    "<span class='ChangerProjects'>manage time</span>",//11
    "<span class='ChangerProjects'>solve problems</span>",//12
    "<span class='ChangerProjects'>make long hours</span>",//13
    "<span class='ChangerProjects'>fix things</span>",//14
    "<span class='ChangerProjects'>create</span>",//15
    "<span class='ChangerProjects'>develop</span>",//16
    "<span class='ChangerProjects'>program</span>",//17
    "<span class='ChangerProjects'>do the impossible</span>",//18
    "<span class='ChangerProjects'>rebuild</span>",//19
]

//Projects
function _changeTextProjects() {
    if (i < ProjectsWords.length) {
        ChangeTxt.innerHTML = ProjectsWords[i];
        i++;
    }
    else {
        i = 0;
    }  
}
setInterval("_changeTextProjects()", 2500);