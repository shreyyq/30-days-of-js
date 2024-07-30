// Activity 1
// Task 1 (Bubble Sort)
function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    console.log(array);
};
let array1=[234,43,55,63,5,6,235,547];
bubbleSort(array1);

// Task 2 (Selection Sort)
function selectionSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    console.log(array);
};
let array2=[234,43,55,63,5,6,235,547];
selectionSort(array2);

// Task 3 (Quick Sort)
// ToDo: Revise
function partition(arr,low,high){
    let pivot=arr[high];
    let i=low-1;

    for(let j=low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}
function quickSort(arr,low,high){
    if(low>=high) return;
    let p=partition(arr,low,high);

    quickSort(arr,low,p-1);
    quickSort(arr,p+1,high);
};
let arr=[10,80,30,90,40];
console.log("Original Array:",arr);
quickSort(arr,0,arr.length-1);
console.log("Sorted Array:",arr);


// Activity 2
// Task 4 (Linear Search)
function linearSearch(array,n){
    for(let i=0;i<array.length;i++){
        if(array[i]===n){
            return i;
        }
    }
    return -1;
};
let array3=[2,3,4,10,40];
let n=10;
let result=linearSearch(array3,n);
(result===-1)?console.log(`Element is not present`):console.log(`Element is present at index`,result);

// Task 5 (Binary Search)
let binarySearch=function(array,x){
    let start=0,end=array.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(array[mid]===x) return true;
        else if(array[mid]<x) start=mid+1;
        else end=mid-1;
    }
    return false;
}
let array4=[1,3,5,7,8,9];
let x=5;
if(binarySearch(array4,x,0,array4.length-1)){
    console.log("Element Found!");
}
else{
    console.log("Element not found");
}
x=10;
if(binarySearch(array4,x,0,array4.length-1)){
    console.log("Element Found!");
}
else{
    console.log("Element not found");
};
