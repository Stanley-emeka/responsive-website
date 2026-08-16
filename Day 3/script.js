const toggleNav = document.querySelector('.menu-bar');
const navOpen = document.querySelector('.nav-links');
toggleNav.addEventListener('click', () =>{
    toggleNav.classList.toggle('active')
    navOpen.classList.toggle('active')
});