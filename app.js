const wallDropdown = document.getElementById('wall-dropdown');
const paintingDropdown = document.getElementById('painting-dropdown');
const frameDropdown = document.getElementById('frame-dropdown');

// const wallImage = document.getElementById('wall-image');
const imageSection = document.getElementById('image-section');
const wallBackground = document.getElementById('wall-background');
const paintingImage = document.getElementById('painting-image');
const frameImage = document.getElementById('frame-image');

const phraseInput = document.getElementById('phrase-input');
const phraseButton = document.getElementById('phrase-button');
const phraseSection = document.getElementById('phrase-section');

const countSection = document.getElementById('count-section');
const wallCountEl = document.getElementById('wall-count');
const paintingCountEl = document.getElementById('painting-count');
const frameCountEl = document.getElementById('frame-count');
const logButton = document.getElementById('log-button');

let phrases = [];
let wallCount = 0;
let paintingCount = 0;
let frameCount = 0;

displayPhrase();
removeClass();

wallDropdown.addEventListener('change', () => {
    // wallImage.src = `./assets/${wallDropdown.value}-wall.png`;
    wallBackground.classList.remove('concrete-bg', 'white-bg', 'dark-bg');
    wallBackground.classList.add(`${wallDropdown.value}-bg`);
    wallCount++;
    displayCount();
});

paintingDropdown.addEventListener('change', () => {
    paintingImage.src = `./assets/${paintingDropdown.value}-painting.png`;
    paintingCount++;
    displayCount();
});

frameDropdown.addEventListener('change', () => {
    frameImage.src = `./assets/${frameDropdown.value}-frame.png`;
    frameCount++;
    displayCount();
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

function displayCount() {
    wallCountEl.textContent = wallCount;
    paintingCountEl.textContent = paintingCount;
    frameCountEl.textContent = frameCount;
}

function removeClass() {
    imageSection.classList.remove('hide');
}

logButton.addEventListener('click', () => {
    phraseSection.classList.toggle('hide');
    imageSection.classList.toggle('hide');
});
