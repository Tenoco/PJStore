// script.js
document.addEventListener('DOMContentLoaded', function() {

    // Check for saved theme in cookies
    const theme = getCookie('theme') || 'dark';

    // Apply the theme to the body
    document.body.classList.toggle('light', theme === 'light');
    
    // Set the checkbox state based on theme
    document.getElementById('theme-toggle').checked = theme === 'light';
    
    // Update button text based on current theme
    updateThemeButtonText();

    // Theme toggle button event listener
    document.getElementById('theme-toggle').addEventListener('change', function() {
        const newTheme = document.body.classList.toggle('light') ? 'light' : 'dark';
        setCookie('theme', newTheme, 365);
        updateThemeButtonText();
    });

});

// Function to set a cookie
function setCookie(name, value, days) {
     const expires = new Date(Date.now() + days * 864e5).toUTCString();
     document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
     return document.cookie.split('; ').reduce((r, v) => {
         const parts = v.split('=');
         return parts[0] === name ? decodeURIComponent(parts[1]) : r;
     }, '');
}

// Function to update the button text based on the current theme
function updateThemeButtonText() {
     const label = document.getElementById('toggle-label');
     label.textContent = document.body.classList.contains('light') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}