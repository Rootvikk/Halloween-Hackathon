document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const stars = document.querySelector('.stars');

    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        navbar.style.backgroundColor = window.scrollY > 50 
            ? 'rgba(64, 0, 64, 0.9)' // Dark purple when scrolling
            : 'rgba(0, 0, 0, 0.7)'; // Original semi-transparent black
    });

    // Toggle night mode
    document.querySelector('.toggle-button').addEventListener('click', toggleNightMode);

    function toggleNightMode() {
        document.body.classList.toggle('night-mode');
        stars.style.display = document.body.classList.contains('night-mode') ? 'block' : 'none';
    }
});
function startPumpkinAnimation() {
    const pumpkins = document.querySelectorAll('.pumpkin');
    
    pumpkins.forEach(pumpkin => {
        // Start enhanced animation for each pumpkin
        animatePumpkin(pumpkin); 
    });

    // Stop the animation after a certain time
    setTimeout(stopPumpkinAnimation, 5000); // Adjust time as needed
}

function animatePumpkin(pumpkin) {
    const maxX = window.innerWidth - 50; // Adjust based on pumpkin size
    const maxY = window.innerHeight - 50;

    // Fade-in effect at the start
    pumpkin.style.opacity = '0';
    pumpkin.style.transition = 'opacity 1s';
    pumpkin.style.opacity = '1';

    function move() {
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        const randomScale = 0.5 + Math.random(); // Scale between 0.5 and 1.5
        const randomRotation = Math.random() * 360; // Rotate between 0 and 360 degrees
        const randomDuration = 300 + Math.random() * 700; // Random duration between 300ms and 1000ms

        pumpkin.style.transition = `transform ${randomDuration}ms ease-in-out`;
        pumpkin.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale}) rotate(${randomRotation}deg)`;
    }

    // Set up interval for smooth, continuous movement
    pumpkin.animationInterval = setInterval(move, 700); // Move every 700ms
}

function stopPumpkinAnimation() {
    const pumpkins = document.querySelectorAll('.pumpkin');
    pumpkins.forEach(pumpkin => {
        clearInterval(pumpkin.animationInterval);
        
        // Fade-out effect when stopping
        pumpkin.style.transition = 'opacity 1s';
        pumpkin.style.opacity = '0';

        setTimeout(() => {
            pumpkin.style.transform = 'translate(0, 0) scale(1) rotate(0deg)'; // Reset position, scale, and rotation
        }, 1000); // Allow time for fade-out before resetting
    });
}

