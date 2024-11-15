// Functions for showing the form for adding a new item on the admin Feeds page
function showAddFeed(){
    let addfeedDiv = document.querySelector('.addFeed');

    if(addfeedDiv.style.display === 'none' || addfeedDiv.style.display === ''){
        addfeedDiv.style.display = 'block';
    }else {
        addfeedDiv.style.display = 'none';
    }
}