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
