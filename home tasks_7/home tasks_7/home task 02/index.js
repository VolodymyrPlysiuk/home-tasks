
let newText = document.getElementById("text");
let btn = document.getElementsByTagName("button")[0];

btn.onclick = () => {
    
    newText.style.fontSize = "20px";
    newText.style.fontFamily = "Comic Sans MS";

    let newText1 = document.getElementsByTagName("p");
    for (let i = 0; i < newText1.length; i++) {
        newText1[i].style.color = "orange";
    }

}

