let read=require("readline-sync");
let num1=read.question("Enter First Number : ");
let num2=read.question("Enter Second Number : ");
let num3=read.question("Enter Third Number : ");
let exp1 = Number(num1) + Number(num2) * Number(num3);
let exp2 = Number(num1) % Number(num2) + Number(num3);
let exp3 = Number(num3) + Number(num1) / Number(num2);
let exp4 = Number(num1) * Number(num2) + Number(num3);
console.log("Result of expressions are: exp4: " +exp1 + "\n exp2: " + exp2 + "\nexp3: " + exp3 + "\nexp4: " + exp4);
if((exp1>exp2) && (exp1>exp3) && (exp1>exp4)){
    console.log(exp1 + " is the maximum");
}
else if(( exp2 > exp1 ) && (exp2>exp3) && (exp2>exp4)) {
    console.log(exp2 + " is the maximum");
}
else if((exp3>exp1) && (exp3>exp2) && (exp3>exp4)) {
    console.log(exp3 + " is the maximum");
}
else {
    console.log(exp4 + " is the maximum");
}
if((exp1<exp2) && (exp1<exp3) && (exp1<exp4)){
    console.log(exp1 +" is the minimum");
}
else if((exp2<exp1) && (exp2<exp3) && (exp2<exp4)) {
    console.log(exp2 +" is the minimum");
}
else if((exp3<exp1) && (exp3<exp2) && (exp3<exp4)){
    console.log(exp3 +" is the minimum");
}
else{
    console.log(exp4 +" is the minimum");
}