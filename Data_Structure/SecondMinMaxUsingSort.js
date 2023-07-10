const arr = [];
for(let i=0;i<10;i++){
    arr[i] = Math.floor(Math.random()*899)+100;
}

console.log("Unsorted Array: [" +arr+ "]");
let sortedArray = arr.sort();
console.log("Sorted Array: [" +sortedArray+ "]");

let secondMax = sortedArray.slice(-2,-1);
let secondMin = sortedArray[1];

console.log("Second Maximum value is: " +secondMax);
console.log("Second Minimum value is: " +secondMin);