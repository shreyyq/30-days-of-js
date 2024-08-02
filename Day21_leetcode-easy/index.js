// Activity 1 (Two Sum)
function twoSum(nums,target){
    for(let i=1;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[j]+nums[j-i]===target){
                return [j-i,j];
            }
        }
    }
    return [];
};
const nums1=[2,7,11,15];
const target1=9;
console.log(twoSum(nums1,target1)); 
const nums2=[3,2,4];
const target2=6;
console.log(twoSum(nums2,target2));


// Activity 2 (Reverse Integer)
function reverseInt(num){
    let result=0;
    if(num<0){
    result=parseInt(String(num).slice(1).split('').reverse().join(''))*-1;
    }
    else{
        result=parseInt(String(num).split('').reverse().join(''));
    }
    if(result>Math.pow(2,31)-1||result<-Math.pow(2,31)){
        return 0;
    }
    return result;
};
console.log(reverseInt(123));
console.log(reverseInt(486));
console.log(reverseInt(-123));
console.log(reverseInt(120));


// Activity 3 (Palindrome Number)
const palindromeNo =(num)=>{
    let reverse=0;
    let num2=num;
    if(num<0){
        return false;
    }
    while(num2){
        let temp=num2%10;
        reverse=reverse*10+temp;
        num2=Math.floor(num2/10);
    }
    return reverse===num;
};
console.log(palindromeNo(12521));
console.log(palindromeNo(32125));


// Activity 4 (Merge Two Sorted Lists)
function mergeTwoLists(list1,list2){
    let dummy=new ListNode(-1);
    let head=dummy;

    while(list1&&list2){
        if(list1.val<list2.val){
            head.next=list1;
            list1=list1.next;
        }
        else{
            head.next=list2;
            list2=list2.next;
        }
        head=head.next;
    }
    head.next=list1||list2;

    return dummy.next;
    }
class ListNode{
    constructor(val=0,next=null){
        this.val=val;
        this.next=next;
    }
}

const list1=new ListNode(1);
list1.next=new ListNode(2);
list1.next.next=new ListNode(4);

const list2=new ListNode(1);
list2.next=new ListNode(3);
list2.next.next=new ListNode(4);

const mergedList=(mergeTwoLists(list1,list2));

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
printList(mergedList);


// Activity 5 (Valid Parentheses)
function validParentheses(str){
    let stack=[];
    let map={
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let i=0;i<str.length;i++){
        if(str[i]==='('|| str[i]==='['|| str[i]==='{'){
            stack.push(str[i]);
        }
        else{
            let last=stack.pop();
            if(str[i]!==map[last]){
                return false;
            }
        }
    }
    if(stack.length!==0){
        return false;
    }
    return true;
};

console.log(validParentheses('()'));
console.log(validParentheses('()[]{}'));
console.log(validParentheses('(]'));
console.log(validParentheses('([)]'));
console.log(validParentheses('{[]}'));
