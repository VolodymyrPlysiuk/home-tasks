

numsArr = [2,5,9,12,17,22,2,14,17,2,5,8,9,12,5,50,11,3,]

temp=[1,2,3,3,3,4,4,5,6,7, 8,8,9,12,12]

function compact(arr)  {

   let r = [];

   arr.forEach(element => {
      if (r.includes(element)){

      }else{
         r.push(element)

      }
      
   });
      
   return r;
            
    }


    console.log(compact(temp));