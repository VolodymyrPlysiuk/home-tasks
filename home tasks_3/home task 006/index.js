function calc(a, b, op){
    if (op === 1){
        return a-b
    } else if (op === 2){
        return a*b
    } else if (op === 3){
        return a/b
    }else {
        return a+b
    }
};

console.log(calc(100,20,4));