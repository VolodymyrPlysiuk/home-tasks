











let country = document.getElementById("country")
let city = document.getElementById("cities")


country.onchange = () => {

    let c = country.options[country.selectedIndex].text;
    city.innerHTML = "";
    console.log(c)
    if (c === "Germany") {
        city.appendChild(new Option("Berlin", "Berlin"))
        city.appendChild(new Option("Dortmund", "Dortmund"))
        city.appendChild(new Option("Frankfurt", "Frankfurt"))
        city.appendChild(new Option("Munich", "Munich"))

    } else if (c === "Ukraine") {
        city.appendChild(new Option("Kiyv", "Kiyv"))
        city.appendChild(new Option("Lviv", "Lviv"))
        city.appendChild(new Option("Ivano-Frankivsk", "Ivano-Frankivsk"))
        city.appendChild(new Option("Rivne", "Rivne"))

    } else if (c === "USA") {
        city.appendChild(new Option("New-York", "New-York"))
        city.appendChild(new Option("Washington", "Washington"))
        city.appendChild(new Option("Boston", "Boston"))
        city.appendChild(new Option("Chicago", "Chicago"))

    }


}
let p = document.getElementsByTagName("p")[0]
city.onchange = () => {
    let c = country.options[country.selectedIndex].text;
    let ct = city.options[city.selectedIndex].text;
    console.log(c + " " + ct)
    p.innerText = c + " " + ct
}

/*<option value="New-York">New-York</option>
<option value="Washington">Washington</option>
<option value="Boston">Boston</option>
<option value="Chicago">Chicago</option>

<option value="Berlin">Berlin</option>
<option value="Dortmund">Dortmund</option>
<option value="Frankfurt">Frankfurt</option>
<option value="Munich">Munich</option>

<option value="Kiyv">Kiyv</option>
<option value="Lviv">Lviv</option>
<option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
<option value="Rivne">Rivne</option>*/