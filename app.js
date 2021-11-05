const div = document.createElement("div");

document.body.appendChild(div);

let titlesArray = ["h5", "h4", "h3", "h2", "h1"];



for (let i=0; i<raderArray.length; i++) {

    let createTitles = document.createElement(titlesArray[i]);
    createTitles.innerHTML = raderArray[i];
    div.appendChild(createTitles);
    

}