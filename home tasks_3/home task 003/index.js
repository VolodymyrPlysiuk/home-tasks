



function randArray(count) {
   let arr =[];
for (let i = 0; i<count; i++){
   arr.push(Math.round(Math.random()*499+1));
}
return arr;
}


console.log(randArray(3));
console.log(randArray(6));