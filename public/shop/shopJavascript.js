function showCategory(category) {
    // Hide all category divs
    console.log('Hello')
    document.querySelectorAll('.body > div').forEach(div => {
        div.style.display = 'none';
    });

    // Show the selected category
    document.querySelector('.' + category).style.display = 'block';
}
