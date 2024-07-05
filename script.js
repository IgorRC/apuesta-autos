// script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const bettingSection = document.getElementById('betting-section');
    const resultsSection = document.getElementById('results-section');
    const bettingStatus = document.getElementById('betting-status');
    const results = document.getElementById('results');
    const carOptions = document.querySelectorAll('.car-option');

    let loggedIn = false;
    let bet = null;

    // Simular un login sencillo
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loggedIn = true;
        loginSection.style.display = 'none';
        bettingSection.style.display = 'block';
    });

    // Manejar la selección de autos
    carOptions.forEach(option => {
        option.addEventListener('click', () => {
            carOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            bet = option.getAttribute('data-car');
            bettingStatus.textContent = `Has apostado por el ${option.querySelector('.car-details h3').textContent}.`;
            setTimeout(showResults, 5000); // Mostrar resultados después de 5 segundos
        });
    });

    // Función para mostrar resultados de la carrera
    function showResults() {
        const cars = ['auto1', 'auto2', 'auto3'];
        const winner = cars[Math.floor(Math.random() * cars.length)];
        resultsSection.style.display = 'block';
        results.textContent = `El ganador es ${winner}.`;

        if (bet === winner) {
            results.textContent += ' ¡Felicidades, has ganado tu apuesta!';
        } else {
            results.textContent += ' Lo siento, has perdido tu apuesta.';
        }
    }
});
