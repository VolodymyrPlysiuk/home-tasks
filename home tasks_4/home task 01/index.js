



//let arr = [1, 2, 3, 4, 5, 6];

function sumSliceArray(arr, first, second) {
    if (arr[first] >= 0 && arr[first] <= arr.length && arr[second] >= 0 && arr[second] <= arr.length) {
        return arr[first] + arr[second]
    } else {
     throw new Error("Input data is not valid");
    };
}

/*try {
    console.log(sumSliceArray(arr, 2, 3));

    console.log(sumSliceArray(arr, 2, 10));

    console.log(sumSliceArray(arr, 2, 3));
} catch {
    console.log("Exception");
}*/







