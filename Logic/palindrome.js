function palin(str){
    let i=0;
    let j=str.length-1;
    while(j>i){
        if(str.charAt(i)!=str.charAt(j)){
            console.log("it is not a palindrome");
            return
        }
        i++;
        j--;
    }
    console.log("it is a palindrome");

}
palin("hannah");