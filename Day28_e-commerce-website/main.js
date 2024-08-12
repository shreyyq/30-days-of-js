const products=
    [
        {
            "id": 1,
            "name": "Perfume",
            "price": 5000.00,
            "description": "Fogg perfume : Long lasting and enduring.",
            "imageUrl": "https://images.pexels.com/photos/15005105/pexels-photo-15005105/free-photo-of-cosmetic-product-in-black-canister.jpeg"
        },
        
        {
            "id": 2,
            "name": "Shoes",
            "price": 4000.00,
            "description": "Flexible to walk",
            "imageUrl": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=2"
        },
        {
            "id": 3,
            "name": "Watch",
            "price": 10000.00,
            "description": "Elegant wristwatch for all occasions.",
            "imageUrl": "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 4,
            "name": "Backpack",
            "price": 500.00,
            "description": "Durable and spacious backpack for daily use.",
            "imageUrl": "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    
        {
            "id": 5,
            "name": "Sunglasses",
            "price": 700.00,
            "description": "Stylish polarized sunglasses for sunny days.",
            "imageUrl": "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 6,
            "name": "Headphones",
            "price": 4000.00,
            "description": "Wireless headphones with noise cancellation.",
            "imageUrl": "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 7,
            "name": "Laptop",
            "price": 40000.00,
            "description": "High-performance laptop for gaming and work.",
            "imageUrl": "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 8,
            "name": "Smartphone",
            "price": 21000.00,
            "description": "Latest smartphone with an advanced camera.",
            "imageUrl": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 9,
            "name": "Tablet",
            "price": 32000.00,
            "description": "Portable tablet with a vibrant display.",
            "imageUrl": "https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 10,
            "name": "Coffee Maker",
            "price": 200.00,
            "description": "Automatic coffee maker for quick and easy brews.",
            "imageUrl": "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 11,
            "name": "Blender",
            "price": 210.00,
            "description": "High-speed blender for smoothies and shakes.",
            "imageUrl": "https://images.pexels.com/photos/7937012/pexels-photo-7937012.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 12,
            "name": "Microwave Oven",
            "price": 3000.00,
            "description": "Compact microwave oven with multiple settings.",
            "imageUrl": "https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 13,
            "name": "Gaming Console",
            "price": 40000.00,
            "description": "Next-gen gaming console with 4K support.",
            "imageUrl": "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 14,
            "name": "Camera",
            "price": 50000.00,
            "description": "Professional DSLR camera for stunning photos.",
            "imageUrl": "https://images.pexels.com/photos/18246356/pexels-photo-18246356/free-photo-of-nikon-analog-camera-on-printed-images.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 15,
            "name": "Bluetooth Speaker",
            "price": 43000.00,
            "description": "Portable Bluetooth speaker with deep bass.",
            "imageUrl": "https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 16,
            "name": "Desk Lamp",
            "price": 1000.00,
            "description": "Adjustable LED desk lamp with touch control.",
            "imageUrl": "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 17,
            "name": "Office Chair",
            "price": 900.00,
            "description": "Ergonomic office chair with lumbar support.",
            "imageUrl": "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 18,
            "name": "Electric Kettle",
            "price": 6000.00,
            "description": "Fast-boiling electric kettle with auto-shutoff.",
            "imageUrl": "https://images.pexels.com/photos/7208670/pexels-photo-7208670.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 19,
            "name": "Fitness Tracker",
            "price": 3100.00,
            "description": "Waterproof fitness tracker with heart rate monitor.",
            "imageUrl": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "id": 20,
            "name": "Yoga Mat",
            "price": 5900.00,
            "description": "Non-slip yoga mat with extra cushioning.",
            "imageUrl": "https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            "id": 21,
            "name": "Water Bottle",
            "price": 20000.00,
            "description": "Insulated water bottle that keeps drinks cold for hours.",
            "imageUrl": "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

function displayProducts(){
    const productList=document.getElementById('product-list');

    products.forEach(product=>{
        const productCard=document.createElement('div');
        productCard.className='product-card';

        productCard.innerHTML=`
         <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}
displayProducts();

let cart=[];

function addToCart(productId){
    const product=products.find(p=>p.id===productId);

    const existingProduct=cart.find(item=>item.id===productId);
    if(existingProduct){
        existingProduct.quantity+=1;
    }
    else{
        cart.push({...product,quantity:1});
    }
    updateCartDisplay();
}

document.getElementById('product-list').addEventListener('click',(e)=>{
    if(e.target.classList.contains('add-to-cart')){
        const productId=parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
    }
});

function updateCartDisplay(){
    const cartSection=document.getElementById('shopping-cart');
    cartSection.innerHTML='<h2>Shopping Cart</h2>';

    cart.forEach(item=>{
        const cartItem=document.createElement('div');
        cartItem.className='cart-item';

        cartItem.innerHTML=`
        <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
        <button class="increase" data-id="${item.id}">+</button>
        <button class="decrease" data-id="${item.id}">-</button>
        <button class="remove" data-id="${item.id}">Remove</button>
        `;
        cartSection.appendChild(cartItem);
    });
}

document.getElementById('shopping-cart').addEventListener('click',(e)=>{
    const productId=parseInt(e.target.getAttribute('data-id'));

    if(e.target.classList.contains('increase')){
        addToCart(productId);
    }
    else if(e.target.classList.contains('decrease')){
        const product=cart.find(item=>item.id===productId);
        if(product.quantity>1){
            product.quantity-=1;
        }
        else{
            cart=cart.filter(item=>item.id!==productId);
        }
        updateCartDisplay();
    }
    else if(e.target.classList.contains('remove')){
        cart=cart.filter(item=>item.id!==productId);
        updateCartDisplay();
    }
});

document.getElementById('checkout-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Order Placed Successfully');

    cart=[];
    updateCartDisplay();
});