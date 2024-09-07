const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#344e5c"
});

password.addEventListener('focus', ()=>{
    password.style.borderColor = "#344e5c"
});

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc"
});

password.addEventListener('blur', ()=>{
    password.style.borderColor = "#ccc"
});