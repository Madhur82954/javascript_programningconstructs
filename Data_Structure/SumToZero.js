const arr=[1,2,3,-11,5,6];

for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length-1;j++){
        for(let k=i+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]==0){
                console.log(arr[i],arr[j],arr[k]);
            }
        }
    }
}