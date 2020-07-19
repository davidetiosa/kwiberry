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

// Calling glider js
window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        // Mobile-first defaults
        slidesToShow: 3,
        slidesToScroll: 1,
        scrollLock: false,
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: '1',
              }
            },
            {
              // screens greater than >= 960px
              breakpoint: 960,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              }
            },
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 9,
                slidesToScroll: 1,
              }
            },
            {
              // screens greater than >= 1200px
              breakpoint: 1200,
              settings: {
                slidesToShow: 11,
                slidesToScroll: 1,
              }
            }
        ]
    });
  })

  // ScrollOut
  ScrollOut({
    once: true,
    threshold: .25,
  });