var arr=[2,3,1,4,5];
var updatedarray=[...Array(5)].map(()=>Math.floor(Math.random()*1000));
var minelement=Math.min(...updatedarray);
var maxelement=Math.max(...updatedarray);
console.log(updatedarray);
console.log(minelement);
console.log(maxelement);