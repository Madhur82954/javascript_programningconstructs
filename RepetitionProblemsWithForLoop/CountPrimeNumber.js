let read=require("readline-sync");
let num1=read.question("Enter num1 : ");
let num2=read.question("Enter num2 : ");

for(i=num1;i<=num2;i++){
    flag=1;
    for(j=2;j<=(i/2);j++){
        if((i%j)==0)
             flag=0;
    }
    if(flag==1){
        console.log("Prime factors are : "+ i);
    }
}