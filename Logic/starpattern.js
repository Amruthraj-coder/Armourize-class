let n=5;
let str="";

for(let i=1;i<=n;i++){
    for(let j=i;j<i+1;j++){
        str+="*";
    }
    console.log(str);
    for(let k=1;k<=n-i;k++){
        str+=" ";
    }
    console.log(str);

}