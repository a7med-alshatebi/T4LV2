let menuIcon = document.querySelector('#menu-icon');
let mobileMenu = document.querySelector('#mobile-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  mobileMenu.classList.toggle('hidden');
};


//dark mode //


// Check for saved user preference in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
} else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
}

// Toggle theme and save preference to localStorage
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Attach the toggleTheme function to the button's onclick event
document.querySelector('button').onclick = toggleTheme;