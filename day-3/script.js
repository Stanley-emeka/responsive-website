const toggleNav = document.querySelector('.menu-bar');
const navOpen = document.querySelector('.nav-links');
toggleNav.addEventListener('click', () =>{
    toggleNav.classList.toggle('active')
    navOpen.classList.toggle('active')
});


function openFooter(pf){
let demo = pf.parentElement.querySelector(".demo");

 if (pf.textContent === "+"){
 demo.style.display = "block"
  pf.textContent = "-"
  
  
 }
 
 else if (pf.textContent === "-"){
  pf.textContent = "+"
  demo.style.display = "none"
 }
}