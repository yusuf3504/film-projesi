const accountButton = document.getElementById('accountButton');
const formContainer = document.getElementById('formContainer');
const closeButton = document.getElementById('closeButton');
const backButton = document.getElementById('backButton');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerButton = document.getElementById('registerButton');

accountButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

backButton.addEventListener('click', () => {
    toggleForms();
});

function signInWithGoogle() {
    alert("Google ile giriş yap butonuna tıkladınız.");
    // Google ile giriş işlemleri burada gerçekleşecek
}

function signInWithApp() {
    alert("App hesabı ile giriş yap butonuna tıkladınız.");
    // App hesabı ile giriş işlemleri burada gerçekleşecek
}

function toggleForms() {
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');

    if (registerForm.classList.contains('hidden')) {
        registerButton.style.display = 'block';
    } else {
        registerButton.style.display = 'none';
    }
}

const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const images = movieLists[i].querySelectorAll('img');
    const imagesCount = images.length;
    
    arrow.addEventListener('click', () => {
        clickCounter++;
        const currentTransform = parseFloat(getComputedStyle(movieLists[i]).transform.split(',')[4]) || 0;

        if (imagesCount - (7 + clickCounter) + (7 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
        } else {
            movieLists[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    });
});

// dark mode start
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title, .movie-list-container, .movie-list-filter, .movie-list,#accountButton,.main,.logo-img");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});
// dark mode end


