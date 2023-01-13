const wallDropdown = document.getElementById('wall-dropdown');
const paintingDropdown = document.getElementById('painting-dropdown');
const frameDropdown = document.getElementById('frame-dropdown');

const wallImage = document.getElementById('wall-image');
const paintingImage = document.getElementById('painting-image');
const frameImage = document.getElementById('frame-image');

const phraseInput = document.getElementById('phrase-input');
const phraseButton = document.getElementById('phrase-button');

wallDropdown.addEventListener('change', () => {
    wallImage.src = `./assets/${wallDropdown.value}-wall.png`;
});

paintingDropdown.addEventListener('change', () => {
    paintingImage.src = `./assets/${paintingDropdown.value}-painting.png`;
});

frameDropdown.addEventListener('change', () => {
    frameImage.src = `./assets/${frameDropdown.value}-frame.png`;
});

phraseButton.addEventListener('click', () => {
    console.log('click');
});
