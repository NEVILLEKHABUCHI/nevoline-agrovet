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
    let addfeedDiv = document.querySelector('.addFeed');

    if(addfeedDiv.style.display === 'none' || addfeedDiv.style.display === ''){
        addfeedDiv.style.display = 'block';
    }else {
        addfeedDiv.style.display = 'none';
    }
}

// Function for closing the form for adding a new item on the admin Feeds page
function closeAddProduct(){
    let addfeedDiv = document.querySelector('.addFeed');

    addfeedDiv.style.display='none';
}

// Function for showing a product's details and editing it in the admin pages
function showDetails(productId){
    let detailDiv = document.getElementById('detail-' +productId);

    if(detailDiv.style.display === 'none' || detailDiv.style.display === ''){
        detailDiv.style.display = 'block';
    }else {
        detailDiv.style.display = 'none';
    }
}
