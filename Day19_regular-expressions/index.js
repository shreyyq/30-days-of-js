// Activity 1
// Task 1
const text=`Javascript is a versatile language. Learning Javascript is Fun!`;
const regex=/Javascript/g;
const matches=text.match(regex);
console.log(matches);

// Task 2
const text2=`The year 2024 has 12 months and 365 days!`;
const regex2=/\d+/g;
const matches2=text2.match(regex2);
console.log(matches2);


// Activity 2
// Task 3
const text3=`Metal tone worse wife Television string yes Task before game becoming bite lake yourself live wood meant new jar serve Bigger fought ruler wear.`;
const regex3=/\b[A-Z][a-zA-Z]*\b/g;
const matches3=text3.match(regex3);
console.log(matches3);

// Task 4
const text4=`ahPKP422mG53By7`;
const regex4=/\d+/g;
const matches4=text4.match(regex4);
console.log(matches4);


// Activity 3
// Task 5
const text5=`(123) 456-7890`;
const regex5= /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5=text5.match(regex5);
console.log(matches5);
if(matches5){
    const[fullMatch,areaCode,centralOfficeCode,lineNumber]=matches5;
    console.log(`Full Match:`,fullMatch);
    console.log(`Area Code:`,areaCode);
    console.log(`Central Office Code:`,centralOfficeCode);
    console.log(`Line Number:`,lineNumber);
}
else{
    console.log(`No Match Found`);
};

// Task 6
const email=`of@kego.co`;
const regex6=/^(\w+)@([\w\.]+)/;
const matches6=email.match(regex6);
console.log(matches6);
if(matches6){
    const[fullEmail,username,domain]=matches6;
    console.log(`Full Email:`,fullEmail);
    console.log(`Username:`,username);
    console.log(`Domain:`,domain);
}
else{
    console.log(`Enter valid Email!`);
};


// Activity 4
// Task 7
const text6=`Hello World! This is a test`;
const regex7=/^\w+/;
const matches7=text6.match(regex7);
if(matches7){
    console.log(`Match:`,matches7[0]);
}
else{
    console.log(`No match Found`);
};

// Task 8
const text7=`Hello World! This is a test`;
const regex8=/\b\w+\b$/;
const matches8=text7.match(regex8);
if(matches8){
    console.log(`Match:`,matches8[0]);
}
else{
    console.log(`No match Found`);
};


// Activity 5 //ToDo:REVISE!!
// Task 9 
const password=`Password1!`;
const regex9=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/;
const matches9=password.match(regex9);
if(matches9){
    console.log(`Password is valid!`);
}
else{
    console.log(`Password is Invalid!`);
};

// Task 10
const url=`https://www.example.com/path/to/resource?query=string#fragment`;
const regex10=/^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/i;
const matches10=url.match(regex10);
if(matches10){
    console.log(`Valid URL!`);
}
else{
    console.log(`Invalid URL!`);
};
