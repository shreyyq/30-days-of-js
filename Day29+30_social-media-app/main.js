let users=JSON.parse(localStorage.getItem('users')) ||[];
let posts = JSON.parse(localStorage.getItem('posts')) || [];

window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('register-section').style.display='none';
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('post-section').style.display = 'block';
        document.getElementById('post-feed').style.display = 'block';

        document.getElementById('profile-username').textContent=`Username: ${currentUser.username}`;
        document.getElementById('profile-email').textContent=`Email: ${currentUser.email}`;
        document.getElementById('profile-picture').src=currentUser.profilePicture|| 'default-avatar.png';
    }
    document.getElementById('logout-button').style.display='block';
    document.getElementById('logout-button').addEventListener('click',function(){
        localStorage.removeItem('currentUser');
        location.reload();
    });
    displayPosts();
};

// Handle user registration
document.getElementById('register-form').addEventListener('submit',function(event){
    event.preventDefault();
    const username=document.getElementById('reg-username').value;
    const password=document.getElementById('reg-password').value;
    const email=document.getElementById('reg-email').value;

    const existingUser=users.find(user=>user.username===username);
    if(existingUser){
        alert('Username already exists. Please choose another one.');
    }
    else{
        users.push({username,password,email,profilePicture:''});
        localStorage.setItem('users',JSON.stringify(users));
        alert('Registration Successful! Please login.');
        document.getElementById('register-section').style.display='none';
        document.getElementById('login-section').style.display='block';
    }
});

// Handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user=users.find(user=>user.username===username&& user.password===password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login Successful!');
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('post-section').style.display = 'block';
        document.getElementById('post-feed').style.display = 'block';
        displayPosts();
    } else {
        alert('Invalid username or password');
    }
});

// Handle post creation
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('post-text').value;
    const image = document.getElementById('post-image').files[0];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const post = {
        text,
        image: image ? URL.createObjectURL(image) : '',
        username: currentUser.username,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    this.reset();
});

// Display posts
function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';

    const currentUser=JSON.parse(localStorage.getItem('currentUser'));

    if(!currentUser){
        console.error('No user is logged in');
        return;
    }

    posts.forEach((post,index)=> {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        if(post.username===currentUser.username){
            postElement.classList.add('logged-in-user');
        }

        const userIndex=users.findIndex(user=>user.username===post.username);
        postElement.classList.add(`user-${userIndex+1}`);

        postElement.innerHTML = `
            <div class="post-header">
                <strong>${post.username}</strong> <span>${post.timestamp}</span>
            </div>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <div class="post-footer">
                <button class="like-button">Like (${post.likes})</button>
                <button class="comment-button">Comment (${post.comments.length})</button>
            </div>
        `;
        postFeed.appendChild(postElement);
    });
}

// Handle post interactions
document.getElementById('post-feed').addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('like-button')) {
        const index = Array.from(target.parentElement.parentElement.parentElement.children).indexOf(target.parentElement.parentElement);
        posts[index].likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }

    if (target.classList.contains('comment-button')) {
        const index = Array.from(target.parentElement.parentElement.parentElement.children).indexOf(target.parentElement.parentElement);
        const comment = prompt('Enter your comment:');
        if (comment) {
            posts[index].comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }
});
