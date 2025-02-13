function showCategory(category) {
    // Hide all category divs
    console.log('Hello')
    document.querySelectorAll('.body > div').forEach(div => {
        div.style.display = 'none';
    });

    // Show the selected category
    document.querySelector('.' + category).style.display = 'flex';
}

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
    })
    .catch(error => {
        console.error("Error:", error);
    })
}