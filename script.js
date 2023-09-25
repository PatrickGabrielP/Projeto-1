const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);

let currentTrackIndex = 0;

const playlist = [
    'musica_1.mp3', // Adicione mais músicas aqui
];

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playPrevious() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

function playNext() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', playNext);
