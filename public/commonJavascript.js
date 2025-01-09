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

// Function for showing a product's details and editing it
function showDetails(productId){
    let detailDiv = document.getElementById('detail-' +productId);

    if(detailDiv.style.display === 'none' || detailDiv.style.display === ''){
        detailDiv.style.display = 'block';
    }else {
        detailDiv.style.display = 'none';
    }
}
