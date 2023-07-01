let read=require("readline-sync");
let num=read.question("Enter number : ");
let fact=1;

for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);