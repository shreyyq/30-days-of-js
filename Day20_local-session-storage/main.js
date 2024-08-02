// Activity 5
// Task 9
function saveToBothStorages(key,value){
    localStorage.setItem(key,value);
    sessionStorage.setItem(key,value);

    console.log(`Local Storage: ${localStorage.getItem(key)}`);
    console.log(`Session Storage: ${sessionStorage.getItem(key)}`);
}
saveToBothStorages('message','Iam So Cool');

// Task 10
function clearAllStorages(){
    localStorage.clear();
    sessionStorage.clear();

    console.log(`Local Storage is empty:`,localStorage.length===0);
    console.log(`Session Storage is empty:`,sessionStorage.length===0);
}
clearAllStorages();