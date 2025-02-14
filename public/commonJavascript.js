function showRight1(){
    let right_1=document.querySelector('.right-1');
    let openTab=document.querySelector('#openTab');
    let closeTab=document.querySelector('#closeTab');
    let welcome_message=document.querySelector('.welcome_message');
    right_1.style.display="flex";
    openTab.style.display="none";
    closeTab.style.display="block";
    welcome_message.style.display="none";
}
//Function for closing right1 tab in the main page
function closeRight1(){
    let right_1=document.querySelector('.right-1');
    let openTab=document.querySelector('#openTab');
    let closeTab=document.querySelector('#closeTab');
    let welcome_message=document.querySelector('.welcome_message');
    right_1.style.display="none";
    openTab.style.display="block";
    closeTab.style.display="none";
    welcome_message.style.display="block";
}

// Functions for showing the form for adding a new item on the admin pages
function showAddProduct(){
    console.log("Hello Neville");
    let addProductDiv = document.querySelector('.addProduct');

    if(addProductDiv.style.display === 'none' || addProductDiv.style.display === ''){
        addProductDiv.style.display = 'block';
    }else {
        addProductDiv.style.display = 'none';
    }
}

// Function for closing the form for adding a new item on the admin Feeds page
function closeAddProduct(){
    let addProductDiv = document.querySelector('.addProduct');

    addProductDiv.style.display='none';
}

// Select the search input and table rows
const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('.body-contentBody table tr');

// Add an event listener search input
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase(); //Get search query in lowercase

    tableRows.forEach((row, index) => {
        // Skip the header row 
        if (index === 0) return;

        // Get the product name column's text
        const productName = row.children[1].textContent.toLowerCase();

        // Show/hide the row based on search match
        row.style.display = productName.includes(query) ? '' : 'none';
    });
});

// Function for showing a product's details and editing it in the admin pages
function showDetails(productId){
    let detailDiv = document.getElementById('detail-' +productId);

    if(detailDiv.style.display === 'none' || detailDiv.style.display === ''){
        detailDiv.style.display = 'block';
    }else {
        detailDiv.style.display = 'none';
    }
}
