function arrMul2(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2
    }
    return arr;
}

let result=arrMul2([1,2,3,4])
console.log(result);