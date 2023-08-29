

const monthOfTheYear = ["", "January", "Fabruary", "March", "April", "May", "june",
    "Julay", "August", "September", "October", "November", "December"];

class MonthException {
    constructor(name) {
        this.name = name;
    }

}

function showMonthName(month) {

    if (month == NaN || month < 1 || month > 12) {
        throw new MonthException("Incorrect month number")
    } else {
        return monthOfTheYear[month]
    }
}

try {
    console.log(showMonthName(5));  // May
    console.log(showMonthName(14)); // MonthException Incorrect month number
} catch (e) {
    console.log(e);
}
