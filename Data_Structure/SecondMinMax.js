const arr=[];

for(let i=0;i<10;i++){
    arr[i]=Math.floor(Math.random()*899)+100;
}

console.log("Array is : ["+arr+"]");

let Maxvalue=arr[0];
let MinValue=arr[1];
let SecondMax=0;
let SecondMin=0;

for (i = 0; i < arr.length; i++) {
    if ( arr[i] > Maxvalue ) {
        SecondMax = Maxvalue;
        Maxvalue = arr[i];
    }
    else if ( arr[i] > SecondMax && arr[i] != Maxvalue ) {
        SecondMax = arr[i];
    }
    if ( arr[i] < MinValue ) {
        SecondMin = MinValue;
        MinValue = arr[i];
    }
    else if ( arr[i] < SecondMin && arr[i] != MinValue ) {
        SecondMin = arr[i];
    }
}

console.log("Second Maximum Value is : "+SecondMax);
console.log("Second Minimum Value is : "+SecondMin);