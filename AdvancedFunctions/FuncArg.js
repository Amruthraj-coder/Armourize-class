function func(myfunc,x,y){
    console.log("inside func")
   
    let result =myfunc(x,y)
    return result;
}
function myfunc(x,y){
    return x+y;
}

let res=func(myfunc,5,6);

console.log(res);