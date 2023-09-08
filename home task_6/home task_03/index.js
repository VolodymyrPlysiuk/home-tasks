let p1 = document.createElement("p");
let div1 = document.createElement("div");
div1.setAttribute("id", "myDiv")
let main = document.createElement("main");
main.setAttribute("class", "mainClass check item")
p1.innerText = "First Paragraph";

div1.appendChild(p1)

main.appendChild(div1)

document.body.appendChild(main)



