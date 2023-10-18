document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm-password = document.getElementById("confirm-password").value;

    // Simple validation
    if (username === "" || email === "" || password === "" || confirm-password === "") {
        document.getElementById("message").textContent = "All fields are required.";
    } else {
        document.getElementById("message").textContent = "Signup successful! Welcome, " + username + "!";
       
    }
});
