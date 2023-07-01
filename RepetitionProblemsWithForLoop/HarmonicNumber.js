let read=require("readline-sync");
let n=read.question("Enter number :");
let sum=0;

for(let i=1;i<=n;i++){
    sum+=1/i;
}
console.log("Harmonic Value for the series is : "+sum);