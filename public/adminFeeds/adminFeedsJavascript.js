// Functions for showing the form for adding a new item on the admin Feeds page
function showAddFeed(){
    let addfeedDiv = document.querySelector('.addFeed');

    if(addfeedDiv.style.display === 'none' || addfeedDiv.style.display === ''){
        addfeedDiv.style.display = 'block';
    }else {
        addfeedDiv.style.display = 'none';
    }
}

// Function for closing the form for adding a new item on the admin Feeds page
function closeAddFeed(){
    let addfeedDiv = document.querySelector('.addFeed');

    addfeedDiv.style.display='none';
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