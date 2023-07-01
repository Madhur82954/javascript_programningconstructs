let read=require("readline-sync");
let num=read.question("Enter number : ");
for (let i=1; i*i<=num; i++)
  {
    if (num % i == 0)
        {
            console.log(i + " is a prime factor of " + num);
        }
 }