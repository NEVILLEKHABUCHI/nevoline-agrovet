
// Functions to delete a product in the adminFeeds page
function  confirmDeleteFeed(productId){
    if(confirm('Are you want to delete this product?')){
        window.location.href = '/admin/feed/'+productId+ '/delete';
    }
}