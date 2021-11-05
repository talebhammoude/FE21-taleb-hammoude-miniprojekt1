const div = document.createElement("div");
const div2 = document.createElement("div");

const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");

document.body.appendChild(div);

let titlesArray = ["h6", "h4", "h3", "h2", "h1"];
let raderArray = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];


for (let i=0; i<5; i++) {

    let createTitles = document.createElement(titlesArray[i]);
    createTitles.innerHTML = raderArray[i];
    createTitles.setAttribute("style", "padding: 5px; border: 5px solid gray; text-align: center;");
    div.appendChild(createTitles);
    
}


document.body.appendChild(div2);

div2.appendChild(span1);
div2.appendChild(span2);
div2.appendChild(span3);


// let titlesArray = ["h6", "h4", "h3", "h2", "h1"];
// let raderArray = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
// let titlesArray = ["h6", "h4", "h3", "h2", "h1"];

