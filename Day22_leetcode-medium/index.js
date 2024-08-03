// Activity 1 (Add Two Numbers)
function addTwoNumbers(l1,l2){
    let dummy=new ListNode();
    let res=dummy;
    let total=0,carry=0;

    while(l1||l2||carry){
        total=carry;

        if(l1){
            total+=l1.val;
            l1=l1.next;
        }
        if(l2){
            total+=l2.val;
            l2=l2.next;
        }
        let num=total%10;
        carry=Math.floor(total/10);
        dummy.next=new ListNode(num);
        dummy=dummy.next;
    }
    return res.next;
};

class ListNode{
    constructor(val=0,next=null){
        this.val=val;
        this.next=next;
    }
}

const l1=new ListNode(2);
l1.next=new ListNode(4);
l1.next.next=new ListNode(3);

const l2=new ListNode(5);
l2.next=new ListNode(6);
l2.next.next=new ListNode(4);

const addedLists=(addTwoNumbers(l1,l2));

function printList(list){
    let current=list;
    let result='';
    while(current){
        result+=current.val+'->';
        current=current.next;
    }
    result+=null;
    console.log(result);
}
printList(addedLists);


// Activity 2 (Longest Substring Without Repeating Characters)
function lengthOfLongestSubstring(s){
    let left=0;
    let maxLength=0;
    let charSet=new Set();

    for(let right=0;right<s.length;right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength=Math.max(maxLength,right-left+1);
    }
    return maxLength;
};

const s1=(lengthOfLongestSubstring("abcabcbb"));
console.log(s1);
const s2=(lengthOfLongestSubstring("bbbbb"));
console.log(s2);
const s3=(lengthOfLongestSubstring("pwwkew"));
console.log(s3);


