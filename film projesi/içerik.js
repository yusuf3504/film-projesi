document.addEventListener("DOMContentLoaded", function() {
    const accountButton = document.getElementById("accountButton");
    const formContainer = document.getElementById("formContainer");
    const closeButton = document.getElementById("closeButton");
    const registerButton = document.getElementById("registerButton");
    const backButton = document.getElementById("backButton");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const toggleBall = document.querySelector(".toggle-ball");
    const body = document.body;
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    accountButton.addEventListener("click", function() {
        formContainer.classList.remove("hidden");
    });

    closeButton.addEventListener("click", function() {
        formContainer.classList.add("hidden");
    });

    registerButton.addEventListener("click", function() {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    backButton.addEventListener("click", function() {
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    toggleBall.addEventListener("click", function() {
        body.classList.toggle("light-theme");
        body.classList.toggle("dark-theme");
        toggleIcons.forEach(icon => icon.classList.toggle("active"));
    });
});
