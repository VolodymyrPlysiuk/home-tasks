



let arr = [5, "Limit", 12, "a", "3", 99, false, 1231231231231231231231231231231237676n, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
function funcName(arr) {
    let newArr = [];
    let newArr2 = [];
    let newArr3 = [];
    let newArr4 = [];
    let newArr5 = [];
    let newArr6 = [];

    arr.flat().forEach((element) => {
        
        if ( typeof element === "number") {
            newArr.push(element)
        } else if (typeof element === "string") {
            newArr2.push(element)
        } else if (typeof element === "boolean") {
            newArr3.push(element)
        } else if (typeof element === "null") {
            newArr4.push(element)
        }  else if (typeof element === "bigint") {
            newArr6.push(element)
        }

    });

    return [newArr, newArr2, newArr3, newArr4, newArr5, newArr6];
};

console.log(funcName(arr));


