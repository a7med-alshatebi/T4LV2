let menuIcon = document.querySelector('#menu-icon');
let mobileMenu = document.querySelector('#mobile-menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  mobileMenu.classList.toggle('hidden');
};


//dark mode //

const sunIcon = document.querySelector('#sun-icon');
const moonIcon = document.querySelector('#moon-icon');
//
const usertheme = localStorage.getItem('theme');
const systemtheme = window.matchMedia('(prefers-color-scheme: dark)');
//

const iconToggle = () => {
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
};

//

const themecheck = () => {
  if (usertheme === 'dark' || (!usertheme && systemtheme)) {
    document.documentElement.classList.add('dark');
    return;
  }
  sunIcon.classList.add('display-none');
}

//

const themeswitch = () => {
  if(document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

//

sunIcon.addEventListener('click', themeswitch);
moonIcon.addEventListener('click', themeswitch);
themecheck();
*/
//dark mode end//

//scroll to top//
const scrollToTop = document.querySelector('#scroll-to-top');
scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
//scroll to top end//



