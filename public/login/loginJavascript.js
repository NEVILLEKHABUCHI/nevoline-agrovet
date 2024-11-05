const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
const eyeIcon = togglePassword.querySelector('i');

togglePassword.addEventListener('click',function(){
    // Toggle the password field type between 'password' and 'text'
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);

    // Toggle the icon based on the current input type
    if(type === 'password'){
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
})