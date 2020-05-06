"use strict";
console.log("UML Diagramm von Patrick Kaserer. Umgesetzt von Cornelius Schaub");
let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
shuffle(subjects);
shuffle(verbs);
shuffle(objects);
let output = [];
for (let i = 0; i < subjects.length; i++) {
    let sentence = "";
    sentence += subjects[i] + " ";
    sentence += verbs[i] + " ";
    sentence += objects[i];
    output.push(sentence);
}
appendToHTML(output);
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function appendToHTML(sentences) {
    for (let i = 0; i < sentences.length; i++) {
        document.body.innerHTML += "<p>" + sentences[i] + "</p>";
    }
}
//# sourceMappingURL=Main.js.map