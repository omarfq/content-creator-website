const iframe = document.querySelector('iframe');
const play = document.querySelector('.play');
const player = new Vimeo.Player(iframe);

play.addEventListener('click', () => {
    player.play();
});