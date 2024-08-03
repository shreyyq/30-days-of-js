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


// Activity 3 (Container with most Water)
function maxArea(height){
    let maxArea=0;
    let left=0;
    let right=height.length-1;

    while(left<right){
        maxArea=Math.max(maxArea,(right-left)*Math.min(height[left],height[right]));

        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
};
const h1=(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(h1);
const h2=(maxArea([1,1]));
console.log(h2);


// Activity 4 (3 Sum)
function threeSum(num){
    let res=[];
    num.sort((a,b)=>a-b);

    for(let i=0;i<num.length;i++){
        if(i>0&&num[i]===num[i-1]){
            continue;
        }
        let j=i+1;
        let k=num.length-1;

        while(j<k){
            let total=num[i]+num[j]+num[k];

            if(total>0){
                k--;
            }
            else if(total<0){
                j++;
            }
            else{
                res.push([num[i],num[j],num[k]]);
                j++;

                while(num[j]===num[j-1]&&j<k){
                    j++;
                }
            }
        }
    }
    return res;
};

const n1=(threeSum([-1,0,1,2,-1,-4]));
console.log(n1);
const n2=(threeSum([0,1,1]));
console.log(n2);


// Activity 5 (Group Anagrams)
function getSignature(s){
    const count=Array(26).fill(0);
    for(const c of s){
        count[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    const result=[];
    for(let i=0;i<26;i++){
        if(count[i]!==0){
            result.push(String.fromCharCode(i+'a'.charCodeAt(0)),count[i].toString());
        }
    }
    return result.join('');
};

function groupAnagrams(str){
    const result=[];
    const groups=new Map();
    for(const s of str){
        const signature=getSignature(s);
        if(!groups.has(signature)){
            groups.set(signature,[]);
        }
        groups.get(signature).push(s);
    }
    groups.forEach(value=>result.push(value));
    return result;
};

const str1=(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(str1);
const str2=(groupAnagrams([""]));
console.log(str2);
const str3=(groupAnagrams(["a"]));
console.log(str3);







