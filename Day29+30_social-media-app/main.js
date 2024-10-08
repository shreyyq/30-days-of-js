let users=JSON.parse(localStorage.getItem('users')) ||[];
let posts = JSON.parse(localStorage.getItem('posts')) || [];

window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
       showProfile(currentUser);
    }

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
        toggleSections('login');
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
        showProfile(user);
        displayPosts();
    } else {
        alert('Invalid username or password');
    }
});

// Show user profile
function showProfile(user){
    document.getElementById('register-section').style.display='none';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('post-section').style.display = 'block';
    document.getElementById('post-feed').style.display = 'block';
    document.getElementById('notification-section').style.display='block';
    document.getElementById('user-profile').style.display='block';
    document.getElementById('logout-button').style.display='block';

    document.getElementById('profile-username').textContent=`Username: ${user.username}`;
    document.getElementById('profile-email').textContent=`Email: ${user.email}`;
    document.getElementById('profile-picture').src=user.profilePicture|| 'png-transparent-default-avatar-thumbnail.png';
}
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
    addNotification('New post created!');
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
                <button class="comment-button">Comment</button>
                <div class="comment-section" style="display: none;">
                    <form class="comment-form">
                        <input type="text" placeholder="Write a comment..." required>
                        <button type="submit">Add Comment</button>
                    </form>
                    <div class="comments">
                        ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                    </div>
                </div>
            </div>
        `;

        postElement.querySelector('.like-button').addEventListener('click',function(){
            post.likes+=1;
            localStorage.setItem('post',JSON.stringify(post));
            displayPosts();
        });

        postElement.querySelector('.comment-button').addEventListener('click',function(){
            const commentSection=postElement.querySelector('.comment-section');
            commentSection.style.display=commentSection.style.display==='none'?'block':'none';    
        });

        postElement.querySelector('.comment-form').addEventListener('submit',function(event){
            event.preventDefault();
            const commentText=this.querySelector('input[type="text"]').value;
            post.comments.push(commentText);
            localStorage.setItem('post',JSON.stringify(posts));
            displayPosts();
        });
        postFeed.appendChild(postElement);
    });
}

// Add notification
 function addNotification(message) {
        const notificationList = document.getElementById('notification-list');
        if (!notificationList) {
            console.error("Notification list element is missing from the DOM");
            return;
        }
    
        const notificationItem = document.createElement('li');
        notificationItem.textContent = `${new Date().toLocaleString()} - ${message}`;
        notificationList.appendChild(notificationItem);
    
        // Optionally, display the notification section
        document.getElementById('notification-section').style.display = 'block';
    }
    
    // Example usage:
    function likePost(postId) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.likes = (post.likes || 0) + 1;
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            addNotification(`You liked a post: "${post.text}"`);
        }
    }
    
    function commentOnPost(postId, comment) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments = post.comments || [];
            post.comments.push(comment);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
            addNotification(`You commented on a post: "${post.text}"`);
        }
    }
    


document.getElementById('edit-profile-button').addEventListener('click', function() {
    document.getElementById('edit-profile-section').style.display = 'block';
    document.body.classList.add('dimmed');
});

document.getElementById('cancel-edit').addEventListener('click', function() {
    document.getElementById('edit-profile-section').style.display = 'none';
    document.body.classList.remove('dimmed');
});

document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        console.warn("No user is logged in");
        return;
    }

    const newUsername = document.getElementById('edit-username').value;
    const newEmail = document.getElementById('edit-email').value;
    const newProfilePicture = document.getElementById('edit-profile-picture').files[0];

    currentUser.username = newUsername || currentUser.username;
    currentUser.email = newEmail || currentUser.email;

    if (newProfilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.profilePicture = e.target.result;
            updateUserProfile(currentUser);
        };
        reader.readAsDataURL(newProfilePicture);
    } else {
        updateUserProfile(currentUser);
    }
});

function updateUserProfile(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    showProfile(user);
    document.getElementById('edit-profile-section').style.display = 'none';
    document.body.classList.remove('dimmed');
}

function addNotification(message) {
    const notificationList = document.getElementById('notification-list');
    if (!notificationList) {
        console.error("Notification list element is missing from the DOM");
        return;
    }

    const notificationItem = document.createElement('li');
    notificationItem.textContent = `${new Date().toLocaleString()} - ${message}`;
    notificationList.appendChild(notificationItem);

    document.getElementById('notification-section').style.display = 'block';
}

// Hide notifications after a certain time
setTimeout(() => {
    document.getElementById('notification-section').style.display = 'none';
}, 5000); // Notifications will disappear after 5 seconds
