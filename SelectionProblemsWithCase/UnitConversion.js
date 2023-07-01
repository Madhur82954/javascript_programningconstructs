let read=require("readline-sync");
let digit=read.question("Enter the digit for unit conversion : ");
let number=read.question('Enter 1. Feet to Inch ' + '2. Feet to Meter ' + '3. Inch to Feet ' + '4. Meter to Feet option: ');
switch(Number(number)) 
{
    case 1: 
        let feetToInch = digit*12;
        console.log("Feet to Inch : "+feetToInch);
        break;
    case 2: 
        let feetToMeter = digit/3.281;
        console.log("Feet to Meter : "+feetToMeter);
        break;
    case 3: 
        let inchToFeet = digit/12;
        console.log("Inch to Feet : "+inchToFeet);
        break;
    case 4: 
        let meterToFeet = digit*3.281;
        console.log("Meter to Feet : "+meterToFeet);
        break;
    default:
        console.log("You have entered the wrong input.");
        break;
}
