const wallDropdown = document.getElementById('wall-dropdown');
const paintingDropdown = document.getElementById('painting-dropdown');
const frameDropdown = document.getElementById('frame-dropdown');

const wallImage = document.getElementById('wall-image');
const paintingImage = document.getElementById('painting-image');
const frameImage = document.getElementById('frame-image');

const phraseInput = document.getElementById('phrase-input');
const phraseButton = document.getElementById('phrase-button');
const phraseSection = document.getElementById('phrase-section');

let phrases = [];

displayPhrase();

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
    phrases.push(phraseInput.value);

    displayPhrase();
});

function displayPhrase() {
    phraseSection.textContent = '';

    for (let phrase of phrases) {
        const newPhrase = document.createElement('p');

        newPhrase.textContent = phrase;

        phraseSection.append(newPhrase);
    }
}
