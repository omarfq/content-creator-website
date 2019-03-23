const iframe = document.querySelector('iframe');
const play = document.querySelector('.play');
const player = new Vimeo.Player(iframe);
const clickImg = document.querySelector('.click-img');

play.addEventListener('click', () => {
    clickImg.classList.add('show');
    player.play();
});