let header = document.querySelector('.header');
let headerNav = header.children[1];
let buttonMenu = document.querySelector('.menu-button');
let allLiEl = headerNav.children[0].children;
let href;
let id;
let openNav = false;

function updateWidth(){
    let screenWidth = window.innerWidth;
   
    if(screenWidth <= 675){
        headerNav.classList.add('hidden-nav');
    } else {
        if(document.querySelector('.hidden-nav')){
            headerNav.classList.remove('hidden-nav');
        }
       
    }
}

updateWidth();
window.addEventListener('resize', updateWidth);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});

function openMenu(){
    openNav = true;
    document.querySelector('.hidden-nav').classList.add('visible-nav');
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow: hidden');

    document.querySelector('.menu-button').style = 'transform: rotate(90deg); transition: all 0.5s';

    return openNav;
}

function closeMenu(){
    openNav = false;
    document.getElementsByTagName('body')[0].setAttribute('style', 'overflow-x: hidden; overflow-y: auto');
    document.querySelector('.menu-button').style = 'transform: rotate(0deg); transition: all 0.5s';

    if( document.querySelector('.visible-nav')){
        document.querySelector('.visible-nav').classList.remove('visible-nav');
    }
   
    setTimeout(() => {
        if (id && href) {
            delayedScroll(id);
        }
    }, 100);
    return openNav;
}

function delayedScroll(target) {
    setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500); 
}

[...allLiEl].forEach((el) => el.addEventListener('click', ()=> {
   
    href = el.children[0].href;
    id = href.slice(href.indexOf('#'), href.length);
    closeMenu();
}));

buttonMenu.addEventListener('click', ()=> {
    id='';
    href='';
    if(openNav){
        closeMenu();
    } else {
        openMenu()
    }
})












