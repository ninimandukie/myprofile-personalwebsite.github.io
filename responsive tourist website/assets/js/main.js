
/*============SHOW MENU=======================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======= MENU SHOW =========*/      
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}  
/* MENU HIDDEN */  
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
} 

/*=============REMOVE MENU MOBILE======================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================ADD BLUR TO HEADER===================*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*================SHOW SCROLL UP===================*/
const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll') : scrollUpElement.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/*===============SCROLL SECTIONS ACTIVE LINK====================*/
const sections = document.querySelectorAll('.section');

    const scrollactive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionTop = current.offsetTop - 58,
                sectionBottom = sectionTop + current.offsetHeight,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionBottom) {
                sectionsClass && sectionsClass.classList.add('active-link');
            } else {
                sectionsClass && sectionsClass.classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollactive);
