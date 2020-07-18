// Initializing feather icons

feather.replace()

// Nav scroll
window.onscroll = () =>{
    const head = document.querySelector('#hd-scroll');
    if(this.scrollY <= 40) head.className = '';
    else head.className = 'hd-scroll';

    const nav = document.querySelector('#nv-scroll');
    if(this.scrollY <= 40) nav.className = '';
    else nav.className = 'nv-scroll';

    const logo = document.querySelector('#lg-scroll');
    if(this.scrollY <= 40) logo.className = 'nav-logo';
    else logo.className = 'nav-logo lg-scroll';

    //const aclr = document.querySelector('.feather-shopping-bag');
    //if(this.scrollY <= 40) aclr.className = 'feather feather-shopping-bag';
    //else aclr.className = 'feather feather-shopping-bag a-clr';

    const aclr = document.querySelector('.feather-shopping-bag');
    if(this.scrollY <= 40) aclr.style.stroke = "white";
    else  aclr.style.stroke = "black";
};