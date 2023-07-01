let read=require("readline-sync");
let n=read.question("Enter number :");

for(let i=1;i<=n;i++){
    let powerof2=Math.pow(2,i);
    console.log(powerof2);
}