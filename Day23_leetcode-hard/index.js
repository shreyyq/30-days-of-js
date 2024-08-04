// Activity 1 (Median of two sorted Arrays)
function findMedianSortedArrays(num1,num2)
{
    if(num1.length>num2.length)
        {
        [num1,num2]=[num2,num1];
        }

    const m=num1.length;
    const n=num2.length;
    let low=0,high=m;

    while(low<=high)
        {
        const partitionX=Math.floor((low+high)/2);
        const partitionY=Math.floor((m+n+1)/2)-partitionX;

        const maxX=(partitionX===0)? Number.MIN_SAFE_INTEGER:num1[partitionX-1];
        const maxY=(partitionY===0)? Number.MIN_SAFE_INTEGER:num2[partitionY-1];

        const minX=(partitionX===m)?Number.MAX_SAFE_INTEGER:num1[partitionX];
        const minY=(partitionY===n)?Number.MAX_SAFE_INTEGER:num2[partitionY];

        if(maxX<=minY&&maxY<=minX)
            {
            if((m+n)%2===0)
                {
                return (Math.max(maxX,maxY)+Math.min(minX,minY))/2;
                }
            else{
                return Math.max(maxX,maxY);
                }
                }
            else if(maxX>minY)
                {
                high=partitionX-1;
                }
            else{
                low=partitionX+1;
                }
        }
        throw new Error("Input Arrays are not Sorted");
    };

const num1=(findMedianSortedArrays([1,3],[2]));
console.log(num1);
const num2=(findMedianSortedArrays([1,2],[3,4]));
console.log(num2);


// Activity 2 (Merge k Sorted Lists)
const PriorityQueue=require('js-priority-queue');

function mergeKLists(list){
    const queue=new PriorityQueue({comparator:(a,b)=>a.val-b.val});

    for(const head of list){
        if(head){
            queue.queue(head);
        }
    }

    let result=new ListNode();
    const head=result;

    while(queue.length){
        const {val,next}=queue.dequeue();

        result.next=new ListNode(val);
        result=result.next;

        if(next){
            queue.queue(next);
        }
    }
    return head.next;
};

class ListNode{
    constructor(val=0,next=null){
        this.val=val;
        this.next=next;
    }
};

function createLinkedList(arr){
    if(arr.length===0) return null;

    let head=new ListNode(arr[0]);
    let current=head;

    for(let i=1;i<arr.length;i++){
        current.next=new ListNode(arr[i]);
        current=current.next;
    }
    return head;
};

function linkedListToArray(head){
    let arr=[];
    let current=head;

    while(current){
        arr.push(current.val);
        current=current.next;
    }
    return arr;
};

let list1=[
    createLinkedList([1,4,5]),
    createLinkedList([1,3,4]),
    createLinkedList([2,6])
];
let mergedHead1=mergeKLists(list1);
console.log(linkedListToArray(mergedHead1));

let list2=[];
let mergedHead2=mergeKLists(list2);
console.log(linkedListToArray(mergedHead2));

let list3=[createLinkedList([])];
let mergedHead3=mergeKLists(list3);
console.log(linkedListToArray(mergedHead3));



// Activity 3 (Trapping Rain Water)
function trap(height){
    let i=0;
    let left_max=height[0];
    let sum=0;
    let j=height.length-1;
    let right_max=height[j];
    while(i<j){
        if(left_max<=right_max){
            sum+=left_max-height[i];
            i++;
            left_max=Math.max(left_max,height[i]);
        }
        else{
            sum+=right_max-height[j];
            j--;
            right_max=Math.max(right_max,height[j]);
        }
    }
    return sum;
};

const h1=(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(h1);
const h2=(trap([4,2,0,3,2,5]));
console.log(h2);


// Activity 4 (N-Queens) //TODO:Complete!!
function solveNQueens(n){
    const result=[];
    const board=Array.from({length:n},()=> Array(n).fill('.'));
    placeQueens(board,0,result);
    return result;
};

function placeQueens(board,row,result){
    if(row===board.length){
        result.push(board.map(row=>row.join('')));
        return;
    }
    for(let col=0;col<board.length;col++){
        if(isValid(board,row,col)){
            board[row][col]='Q';
            placeQueens(board,row+1,result);
            board[row][col]='.';
        }
    }
};

function isValid(board,row,col){
    for(let i=0;i<row;i++){
        if(board[i][col]==='Q') return false;
    }
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(board[i][j]==='Q') return false;
    }
    for(let i=row-1,j=col+1;i>=0&&j<board.length;i--,j++){
        if(board[i][j]==='Q') return false;
    }
    return true;
};

const n1=(solveNQueens(4));
console.log(n1);
const n2=(solveNQueens(1));
console.log(n2);
//const n3=(solveNQueens(8));
//console.log(n3);


// Activity 5 (Word Ladder) //ToDo:Revise!!
function ladderLength(beginWord,endWord,wordList){
    let wordSet=new Set(wordList);
    if(!wordSet.has(endWord)) return 0;

    let queue=[[beginWord,1]];

    while(queue.length){
        let[currentWord,steps]=queue.shift();

        if(currentWord===endWord) return steps;

        for(let i=0;i<currentWord.length;i++){
            for(let c=97;c<=122;c++){
                const newWord=currentWord.slice(0,i)+String.fromCharCode(c)+currentWord.slice(i+1);

                if(wordSet.has(newWord)){
                    queue.push([newWord,steps+1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};

const b1="hit";
const e1="cog";
const w1=["hot","dot","lot","log","cog"];
console.log(ladderLength(b1,e1,w1));




