// Functions to delete a product in the adminFeeds page
function  confirmDeleteMachinery(productId){
    if(confirm('Are you want to delete this product?')){
        window.location.href = '/admin/machinery/'+productId+ '/delete';
    }
}