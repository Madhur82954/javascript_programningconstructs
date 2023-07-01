/*console.log("Hello");
var arr=[2,1,3,5,4];
console.log(arr);
console.log(arr.sort());
var arr1=[9,7,6];
console.log(arr.concat(arr1));
function hello(name,lastname){
    console.log("Welcome "+name+" "+lastname);
}
hello("Madhur","Verma");*/

var arr=[2,3,1,4,5];
var updatedarray=[...Array(5)].map(()=>Math.floor(Math.random()*1000));
var minelement=Math.min(...updatedarray);
var maxelement=Math.max(...updatedarray);
console.log(updatedarray);
console.log(minelement);
console.log(maxelement);

var read=require("readline-sync");
var day=read.question("Enter Date : ");
var month=read.question("Enter Month :");
if((day>20 && month>'march') || (day<20 && month<'june')){
    console.log(true);
}
else{
    console.log(false);
}