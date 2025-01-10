

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

// Functions to delete a product in the adminFeeds page
function  confirmDeleteFeed(productId){
    if(confirm('Are you want to delete this product?')){
        window.location.href = '/admin/feed/'+productId+ '/delete';
    }
}