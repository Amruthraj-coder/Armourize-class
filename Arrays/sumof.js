function sumOfEle(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
return sum;
}


let sum=sumOfEle([1,2,3,4]);
console.log(sum);