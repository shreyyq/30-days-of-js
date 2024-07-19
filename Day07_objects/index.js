// Activity 1
// Task 1
const book= 
{ title:'Aleph', 
    author:'Paulo Coelho', 
    year:1994};
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);


// Activity 2
// Task 3
book.print=function(){
    return `This book with title ${this.title} is written by ${this.author}`;
};
console.log(book.print());

// Task 4
book.updatedYear=function(year){
    this.year=year;
    return this;
};
console.log(book.updatedYear(2005));


// Activity 3
// Task 5
const library={
    name:'Public Library',
    books:[
        {title: 'OS', author: 'ABC', year:1997},
        {title: 'DBMS', author: 'DEF', year:2003},
        {title: 'CN', author:'GHI', year:2024 },
    ],
};
console.log(library);

// Task 6
let titles=library.books.map((books)=>books.title);
console.log(`${library.name} contains books of ${titles}`);


// Activity 4
// Task 7
book.info=function(){
    return `${this.title} was written in the year ${this.year}`;
};
console.log(book.info());


// Activity 5
// Task 8
const bookInfo={
    title:'Norwegian Wood',
    author:'Haruki Murakami',
    year:2023,
};
for(let property in bookInfo){
    console.log(`${property}:${bookInfo[property]}`);
}

// Task 9
let key=Object.keys(bookInfo);
let value=Object.values(bookInfo);
console.log(key);
console.log(value);