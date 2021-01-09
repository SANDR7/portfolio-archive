var Heden = new Date();

var heden = Heden.getFullYear();
var Maand = Heden.getMonth() + 1;



var DurationExperienceHTML = new Date("2015").getFullYear();
var distanceHTML = heden - DurationExperienceHTML;
document.getElementById("durationExperience1").innerHTML = distanceHTML + " years of experience";

var DurationExperienceCSS = new Date("2015").getFullYear();
var distanceCSS = heden - DurationExperienceCSS;
document.getElementById("durationExperience2").innerHTML = distanceCSS + " years of experience";

var DurationExperienceJS = new Date("2017").getFullYear();
var distanceJS = heden - DurationExperienceJS;
document.getElementById("durationExperience3").innerHTML = distanceJS + " years of experience";

var DurationExperiencePHP = new Date("2019").getFullYear();
var distancePHP = heden - DurationExperiencePHP;
document.getElementById("durationExperience4").innerHTML = distancePHP + " year of experience";

var DurationExperience = new Date("2019").getFullYear();
var distance = heden - DurationExperience;
document.getElementById("durationExperience5").innerHTML = distance + " year of experience";

var DurationExperience = new Date("2019").getFullYear();
var distance = heden - DurationExperience;
document.getElementById("durationExperience6").innerHTML = distance + " year of experience";