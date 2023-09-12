

let btnMakeBlue = document.getElementById("makeBlue");
let btnMakePink = document.getElementById("makePink");
let btnMakeBrown = document.getElementById("makeBrown");
let myLink = document.getElementsByTagName("a")[0];

btnMakeBlue.onclick = () => {
    document.body.style.backgroundColor = "blue"

};

btnMakePink.ondblclick = () => {
    document.body.style.backgroundColor = "pink"

};
btnMakeBrown.onmousedown = () => {
    document.body.style.backgroundColor = "brown"
};
btnMakeBrown.onmouseup = () => {
    document.body.style.backgroundColor = "white"
};

myLink.onmouseover = () => {
    document.body.style.backgroundColor = "yellow"
};
myLink.onmouseout = () => {
    document.body.style.backgroundColor = "white"
};