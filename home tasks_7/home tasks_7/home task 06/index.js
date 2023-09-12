

addEventListener("resize", (event) => {
    let test = document.getElementById("test");
    test.innerText = window.innerHeight + "x" + window.innerWidth;
});