document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email")
    const userEmail = emailField.value;
    const passwordField = document.getElementById("user-pass")
    const userPass = passwordField.value;
    if (userEmail == 'sontan@gmail.com' && userPass == 'secrete') {
        window.location.href = 'banking.html'
    }
})

