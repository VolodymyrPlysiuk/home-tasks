let btnLiveButton = document.getElementById("Live button");
let newNext = document.getElementById("log")





btnLiveButton.onmousedown = () => {
    newNext.innerText += "i was pressed!";
};


btnLiveButton.onmouseover = () => {
    newNext.innerText += "Mouse on me!";
    
};
btnLiveButton.onmouseout = () => {
    newNext.innerText += "Mouse is not on me!";
    
};