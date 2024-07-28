//ToDo:Revise
// Activity 1
// Task 1
function factorial(n){
    if(n===0) return 1;
    let fact=n*factorial(n-1)
    return fact;
};
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(1));

// Task 2
function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
};
console.log(fibonacci(8));
console.log(fibonacci(1));
console.log(fibonacci(2));


// Activity 2
// Task 3
function findSum(a,n){
    if(n<=0) return 0;
    return (findSum(a,n-1)+a[n-1]);
};
console.log(findSum([1,2,3,4,5],5));
console.log(findSum([10,20,30,40,50],5));
console.log(findSum([2,4,6],3));

// Task 4
function findMax(a,n){
    if(n==1) return a[0];
    return Math.max(a[n-1],findMax(a,n-1));
};
console.log(findMax([1,4,45,6,-50,10,2],7));
console.log(findMax([-1,-2,-3,-4,-5],5));


// Activity 3
// Task 5
function reverseString(s){
    if(s===""){
        return s;
    }
    return reverseString(s.substring(1))+s.charAt(0);
};
console.log(reverseString("javascript"));
console.log(reverseString("madam"));

// Task 6
function isPalindrome(s){
    if(s.length<=1) return true;
    if(s.charAt(0)!==s.charAt(s.length-1)){
        return false;
    }
    return isPalindrome(s.substring(1,s.length-1));
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("banana"));
console.log(isPalindrome("kayak"));


// Activity 4
// Task 7
function binarySearch(a,target,left,right){
    if(left>right){
        return -1;
    }
    let mid=Math.floor((left+right)/2);
    if(a[mid]===target){
        return mid;
    }
    if(target<a[mid]){
        return binarySearch(a,target,left,mid-1);
    }
    return binarySearch(a,target,mid+1,right);
};
function search(a,target){
    return binarySearch(a,target,0,a.length-1);
};
console.log(search([1,2,3,4,5,6,7,8,9],5));
console.log(search([1,2,3,4,5,6,7,8,9],10));

// Task 8
function countOccurrences(a,target,index){
    if(index===a.length){
        return 0;
    }
    if(a[index]===target){
        return 1+countOccurrences(a,target,index+1);
    }
    else{
        return countOccurrences(a,target,index+1);
    }
};
function count(a,target){
    return countOccurrences(a,target,0);
};
console.log(count([1,2,3,4,5,3,3,2,1],3));
console.log(count([1,2,3,4,5,3,3,2,1],2));
console.log(count([1,2,3,4,5,3,3,2,1],6));


// Activity 5
// Task 9
class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
function inOrderTraversal(node,result=[]){
    if(node!==null){
        inOrderTraversal(node.left,result);
        result.push(node.value);
        inOrderTraversal(node.right,result);
    }
    return result;
}
let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.left=new TreeNode(4);
root.left.right=new TreeNode(5);
console.log(inOrderTraversal(root));

// Task 10
function findDepth(node){
    if(node===null){
        return -1;
    }
    let leftDepth=findDepth(node.left);
    let rightDepth=findDepth(node.right);
    return Math.max(leftDepth,rightDepth)+1;
}
console.log(findDepth(root));