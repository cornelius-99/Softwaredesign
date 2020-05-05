let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];

for (let i: number = 0; i < 5; i++) {
    console.log(getVerse());
}

function getVerse(): string {
    let sentence: string = "";
    sentence += subjects.splice(getRandomNumber(subjects.length), 1)[0] + " ";
    sentence += verbs.splice(getRandomNumber(verbs.length), 1)[0] + " ";
    sentence += objects.splice(getRandomNumber(objects.length), 1)[0];
    return sentence;
}

function getRandomNumber(max: number){
    return Math.floor(Math.random() * Math.floor(max));
}