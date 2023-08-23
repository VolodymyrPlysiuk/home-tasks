function findUnique(arr) {
    let findUnique = arr.sort().filter((x, i) => x === arr[i + 1]);

    if (findUnique.length === 0)
        return true;
    else
        return false;
}


console.log(findUnique([1,2,3]));
console.log(findUnique([3, 1,2,3]));
