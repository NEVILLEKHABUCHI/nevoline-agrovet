function showCategory(category) {
    // Hide all category divs
    console.log('Hello')
    document.querySelectorAll('.body > div').forEach(div => {
        div.style.display = 'none';
    });

    // Show the selected category
    document.querySelector('.' + category).style.display = 'flex';
}

// Function to add a product to cart
function addToCart( user, productImage, productName, productPrice ){
    const product = { user, productImage, productName, productPrice };
    
    fetch('/client/addToCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); //Show success or error message
        updateCartCount(); //Update cart count dynamically
    })
    .catch(error => {
        console.error("Error:", error);
    })
}

// Function to fetch and update the cart count dynamically
function updateCartCount() {
    fetch('/client/cart/count') //Create this API route in your backend
    .then(response => response.json())
    .then(data => {
        document.getElementById('cart-count').textContent = data.count; //Update cart count without reloading
    })
    .catch(error => {
        console.error("Error fetching cart count: ", error);
    });
}