var read=require("readline-sync");
let date=read.question("Enter Date : ");
let month=read.question("Enter Month :");
let result = "false";

if ((month <= 6) && (month >= 3)) 
{
    let monthDay = 30 + (month % 2);

    if((date >= 1) && (date <= monthDay))
    {
        let days = (month*100) + date;
        
		if ((days >= 320) && (days <= 620))
        {
            result="true";
        }
	}
}

console.log(result);