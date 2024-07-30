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


// Activity 3
// Task 6 (count occurrences)
let str="Javascript";
let count={};
for(let char of str){
    count[char]=(count[char]||0)+1;
}
console.log(`The occurrence of each letter in given string is:`,count);

// Task 7 (longest substring) //TODO:REVISE
function longestSubstring(s){
    let map=new Map();
    let maxLength=0;
    let start=0;

    for(let end=0;end<s.length;end++){
        if(map.has(s[end])){
            start=Math.max(map.get(s[end])+1,start);
        }
        map.set(s[end],end);
        maxLength=Math.max(maxLength,end-start+1);
    }
    return maxLength;
}
let string="learningjavascriptalgos";
console.log(`Longest Substring Length:`,longestSubstring(string));


// Activity 4
// Task 8 (rotate array by k)
function rotateArray(arr,k){
    k=k%arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}
let array5=[1,2,3,4,5,6,7]
let k=3;
console.log(`Rotated Array Is:`,rotateArray(array5,k));

// Task 9 (merge two sorted arrays)
function mergeArrays(arr1,arr2){
    let mergedArray=[];
    let  i=0,j=0;

    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray.push(aar1[i]);
        i++;
    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
let arr1=[1,3,5,7];
let arr2=[2,4,6,8];
console.log(`Merged Array:`,mergeArrays(arr1,arr2));


// Activity 5
// Task 10 (fibonacci dp)
function fibonacci(n){
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}
let no=10;
console.log(`Fibonacci Sequence upto ${no} is:`,fibonacci(no));

// Task 11 (knapsack dp) //ToDo:Revise
function knapsack(weights,values,capacity){
    let wt=weights.length;
    let dp=Array.from({length:wt+1},()=>Array(capacity+1).fill(0));

    for(let i=1;i<=wt;i++){
        for(let w=1;w<=capacity;w++){
            if(weights[i-1]<=w){
                dp[i][w]=Math.max(dp[i-1][w],dp[i-1][w-weights[i-1]]+values[i-1]);
            }
            else{
                dp[i][w]=dp[i-1][w];
            }
        }
    }
    return dp[wt][capacity];
}
let weights=[1,3,4,5];
let values=[1,4,5,7];
let capacity=7;
console.log(`The Maximum value that can be obtained is:`,knapsack(weights,values,capacity));

    

