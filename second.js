


document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    const signUpForm = document.querySelector('.sign-up-container form');
    const signInForm = document.querySelector('.sign-in-container form');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signUpForm.querySelector('input[placeholder="Name"]').value;
        const email = signUpForm.querySelector('input[placeholder="Email"]').value;
        const password = signUpForm.querySelector('input[placeholder="New-Password"]').value;
        
        if (email && password) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.find(user => user.email === email);
            
            if (userExists) {
                alert('User already exists!');
            } else {
                users.push({ name, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('User registered successfully!');
            }
        }
    });
    
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = signInForm.querySelector('input[placeholder="Email"]').value;
        const password = signInForm.querySelector('input[placeholder="Password"]').value;
        if(email == "" && password == ""){
            alert("input your details")
        }

        if (email && password) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                window.location.href = 'dashboard.html';
                alert(`Welcome ${name}`)
            } else {
                alert('Invalid email or password.');
            }
        }
    });
});
