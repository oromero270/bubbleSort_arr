function bubbleSort(arr){
    for (let  i=0 ; i<arr.length; i++){
        for (let j =0; j< (arr.length -i-1);j++){
        if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] =[arr[j+1], arr[j]]
        }              
    }
    
    }
console.log(arr);
}

bubbleSort([23,12,18,22,21,1,13,25,50,-12])
