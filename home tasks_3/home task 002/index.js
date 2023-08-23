function createdArray(a,b) {
    let arr =[];

    let n=1;
 for (let i = a; i<b; i++){
    for (let j = 0 ; j<n; j++){
        arr.push(i);
    }
    n++;
    
 }
 return arr;
 }
 
 //review
 console.log(createdArray(5, 15));
 console.log(createdArray(7, 22));
