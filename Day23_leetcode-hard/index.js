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

