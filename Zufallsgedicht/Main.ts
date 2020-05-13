console.log("UML Diagramm von Patrick Kaserer. Umgesetzt von Cornelius Schaub")

let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];


shuffle(subjects);
shuffle(verbs);
shuffle(objects);


let output: string[] = [];

for (let i: number = 0; i < subjects.length; i++) 
{
    let sentence: string = "";
    sentence += subjects[i] + " ";
    sentence += verbs[i] + " ";
    sentence += objects[i];
    output.push(sentence);
}

appendToHTML(output);

function shuffle(array: any[]) 
{
    array.sort(() => Math.random() - 0.5);
}

function appendToHTML(sentences: string[]) 
{
    for (let i = 0; i < sentences.length; i++) 
    {
        document.body.innerHTML += "<p>" + sentences[i] + "</p>";
    }
}
