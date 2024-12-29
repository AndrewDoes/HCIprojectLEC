// document.addEventListener("DOMContentLoaded", function () {
    var text = document.getElementById("textBox");

    document.getElementById("loginBtn").addEventListener("click", function () {
        // text.textContent = "You have pressed the button";
        // Use window.location.href to redirect to another page
        window.location.href = "home.html";
    });

    function validateForm(){
        window.location.href = "home.html";
    }
// });