// Functions to delete a product in the adminFeeds page
function  confirmDeleteDrug(productId){
    if(confirm('Are you want to delete this product?')){
        window.location.href = '/admin/drug/'+productId+ '/delete';
    }
}