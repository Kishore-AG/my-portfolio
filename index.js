document.addEventListener('DOMContentLoaded', () => {

    // --- AOS (Animate on Scroll) Initialization ---
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
    });

    // --- Theme Toggle Functionality ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // --- Typewriter Effect ---
    const taglineEl = document.querySelector('.tagline');
    const taglineText = "B.Tech AI & ML Student | Aspiring Software Developer";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < taglineText.length) {
            taglineEl.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 70); // Adjust typing speed here
        } else {
            // Create and append a blinking cursor
            const cursor = document.createElement('span');
            cursor.className = 'typewriter-cursor';
            taglineEl.appendChild(cursor);
        }
    }

    // Delay the start of the typewriter effect for a better visual flow
    setTimeout(typeWriter, 1000);

});