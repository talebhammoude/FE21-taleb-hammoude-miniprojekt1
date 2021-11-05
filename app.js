
//========================================== FÖRSTA DELEN =================================================================================================//

const div = document.createElement("div");


document.body.appendChild(div);

let titlesArray = ["h6", "h4", "h3", "h2", "h1"];
let raderArray = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];


for (let i=0; i<5; i++) {

    let createTitles = document.createElement(titlesArray[i]);
    createTitles.innerHTML = raderArray[i];
    createTitles.setAttribute("style", "padding: 5px; border: 5px solid gray; text-align: center;");
    div.appendChild(createTitles);
    
}

//=========================================== ANDRA DELEN ===============================================================================================//


const div2 = document.createElement("div");

const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");




document.body.appendChild(div2);
div2.setAttribute("style", "display: flex; padding: 20px; border: 2px solid gray;");


div2.appendChild(span1);
span1.setAttribute("style", "margin: auto;  border: 7px solid gray;");

div2.appendChild(span2);
span2.setAttribute("style", "margin: auto;  border: 7px solid gray;");

div2.appendChild(span3);
span3.setAttribute("style", "margin: auto;  border: 7px solid gray;");

let parasArray = ["p", "p", "p", "p", "p", "p", "p", "p", "p", "p"];
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedNumbersArray = numbersArray.slice().reverse();
let numbersTxtArray = ["Ett", "Två", "Tre", "Fyra", "Fem", "Sex", "Sju", "Åtta", "Nio", "Tio"];


if (numbersArray.length > 1) {

    for (let i=0; i<10; i++) {

        let createParas = document.createElement(parasArray[i]);
        createParas.innerHTML = numbersArray[i];
        createParas.setAttribute("style", "padding: 5px; border: 1px solid gray;");
        span1.appendChild(createParas);
        
    }

    for (let i=0; i<10; i++) {

       

        let createParas = document.createElement(parasArray[i]);
        createParas.innerHTML = reversedNumbersArray[i];
        createParas.setAttribute("style", "padding: 5px; border: 1px solid gray;");
        span2.appendChild(createParas);
        
    }

    for (let i=0; i<10; i++) {

        let createParas = document.createElement(parasArray[i]);
        createParas.innerHTML = numbersTxtArray[i];
        createParas.setAttribute("style", "padding: 5px; border: 1px solid gray;");
        span3.appendChild(createParas);
        
    }

   

}
