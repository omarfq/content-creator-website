//const iframe = document.querySelector('iframe');
// const play = document.querySelector('.play');
// const player = new Vimeo.Player(iframe);
const clickImg = document.querySelector('.click-img');
const workItem = document.getElementsByClassName('my-work__item');
const workHeading = document.getElementsByClassName('my-work__heading');
const workPlayBtn = document.getElementsByClassName('my-work__play-btn');
const workImg = document.getElementsByClassName('my-work__img');

// play.addEventListener('click', () => {
//     clickImg.classList.add('show');
//     player.play();
// });

for(let i = 0; i < workHeading.length; i++) {
    workHeading[i].addEventListener('mouseenter', () => {
        workPlayBtn[i].classList.add('show');
        workPlayBtn[i].style.transform = 'translate(-50%, -50%)';
        workImg[i].style.filter = 'blur(5px) brightness(60%)';
    }); 

    workHeading[i].addEventListener('mouseleave', () => {
        workPlayBtn[i].classList.remove('show');
    }); 
    
    workImg[i].addEventListener('mouseenter', () => {
        workPlayBtn[i].style.transform = 'translate(-50%, -50%)';
        workImg[i].style.filter = 'blur(5px) brightness(60%)';
    }); 
    
    workImg[i].addEventListener('mouseleave', () => {
        workPlayBtn[i].style.transform = 'translate(-50%, -150%)';
        workImg[i].style.filter = 'none';
    }); 
    
    workPlayBtn[i].addEventListener('mouseenter', () => {
        workPlayBtn[i].style.transform = 'translate(-50%, -50%)';
        workImg[i].style.filter = 'blur(5px) brightness(60%)';
    });
}

// jQuery Smooth scroll
$('.navigation__link, .card__btn').on('click', function(e) {
    if(this.hash != '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    } 
});

// STICKY HEADER
window.onscroll = function() {myFunction()};

var header = document.getElementById("myNavigation");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



