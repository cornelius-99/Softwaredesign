"use strict";
let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
for (let i = 0; i < 5; i++) {
    console.log(getVerse());
}
function getVerse() {
    let sentence = "";
    sentence += subjects.splice(getRandomNumber(subjects.length), 1)[0] + " ";
    sentence += verbs.splice(getRandomNumber(verbs.length), 1)[0] + " ";
    sentence += objects.splice(getRandomNumber(objects.length), 1)[0];
    return sentence;
}
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//# sourceMappingURL=Main.js.map