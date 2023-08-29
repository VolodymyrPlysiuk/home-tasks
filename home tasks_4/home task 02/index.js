function checkAge() {

    let name = prompt("What is your name?")
    if (name === "") {
        alert("The field is empty! Please enter your name")
        throw new RangeError
    } else {

    }
    let age = prompt('How old are you?')
    if (age >= 18 && age <= 70) {

    } else if (age == NaN || age == !Number) {
        alert("The field is empty! Please enter your age")
        throw new RangeError
    } else {
        throw new RangeError
    }

    let status = prompt("What is your stsus?")
    if (status === "admin" || status ==="moderator" || status ==="user") {

    } else {
        throw new EvalError
    }
}

checkAge()
