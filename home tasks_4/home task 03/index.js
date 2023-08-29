

function calcRectangleArea(width, height){
    if(width == NaN || width == !Number){
        throw new Error

    }else{

    } if(height== NaN ||height == !Number){
        throw new Error
    } else{
        return  (width * height)
    }
}

calcRectangleArea(5,6);


try {
    console.log(calcRectangleArea(5,6));

    console.log(calcRectangleArea(5,""));

    //...next will be ignored...

    console.log(calcRectangleArea(5,NaN));

    console.log(calcRectangleArea(5,"6"));

    console.log(calcRectangleArea(5,null));
} catch {
    console.log("Exception");
};


