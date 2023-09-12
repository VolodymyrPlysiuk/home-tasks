

let btn = document.getElementById("btn")
const myDropdown = document.getElementById('names');

btn.onclick = () => {
    myDropdown.remove(myDropdown.selectedIndex);


}

