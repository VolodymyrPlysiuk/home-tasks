


let outBlock = document.getElementsByClassName("out");
let clickBtn = document.getElementsByTagName("input");

clickBtn[clickBtn.length - 1].onclick = () => {
   
    outBlock[0].innerText = clickBtn[0].value + "   " + clickBtn[1].value + "   " + clickBtn[2].value + "   " + clickBtn[3].value;
};






