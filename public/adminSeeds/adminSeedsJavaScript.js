// Functions to delete a product in the adminFeeds page
function  confirmDeleteSeed(productId){
    if(confirm('Are you want to delete this product?')){
        window.location.href = '/admin/seed/'+productId+ '/delete';
    }
}