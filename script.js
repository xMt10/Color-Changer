const body= document.querySelector("body");
const button= document.querySelector("button");

colors=[
    "black",
    "yellow",
    "navy",
    "red",
    "white",
    "orange"
]

button.addEventListener("click",changeBackground);


let number=0

function changeBackground (){


    /* a random color

var number = Math.floor(Math.random()*colors.length);
var selectedColor = colors[number];

*/

if(number==6) number=0

selectedColor = colors[number]
number++;


body.style.backgroundColor= selectedColor;

}


