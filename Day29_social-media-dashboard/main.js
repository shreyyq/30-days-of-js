document.getElementById('login').addEventListener('submit',function(event){
    event.preventDefault();

    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;

    localStorage.setItem('username',username);

    document.getElementById('login-form').style.display='none';
    document.getElementById('dashboard').style.display='block';
});

window.onload=function(){
    if(localStorage.getItem('username')){
        document.getElementById('login-form').style.display='none';
        document.getElementById('dashboard').style.display='block';
    }
};