// import functions and grab DOM elements

import { createCountString } from '/test/functions.js';

const climateDropdown = document.getElementById('climate');
const climateImg = document.getElementById('climate-image');
const climateStatsEl = document.getElementById('climate-stats');

const cityDropdown = document.getElementById('city-size');
const cityImg = document.getElementById('city-size-image');
const cityStatsEl = document.getElementById('city-size-stats');

const locationDropdown = document.getElementById('location');
const locationImg = document.getElementById('location-image');
const locationStatsEl = document.getElementById('location-stats');


const sloganOutputEl = document.getElementById('slogan-output');
const sloganInput = document.getElementById('slogan-input');
const sloganBtn = document.getElementById('slogan-btn');

const main = document.querySelector('main');

// let state

let climateCount = 0;
let cityCount = 0;
let locationCount = 0;

let slogans = [];

let gradientColor1 = '#859b42';
let gradientColor2 = '#91e4f0';
let gradientColor3 = '#547ca4';
let gradientColor4 = '#cedced';

//climate dropdown
climateDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    const type = 'climate';
    climateCount++;
    climateImg.src = `/assets/climate-${value}.jpg`;

    displayStats(type, climateCount);

    backgroundColors(value);
});

// city-size dropdown
cityDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    const type = 'city size';
    cityCount++;
    cityImg.src = `/assets/city-size-${value}.jpg`;

    displayStats(type, cityCount);
});

//location dropdown
locationDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    const type = 'location';
    locationCount++;
    locationImg.src = `/assets/location-${value}.jpg`;

    displayStats(type, locationCount);

    backgroundColors(value);
});


function displayStats(type, count) {
    if (type === 'climate') {
        const statsString = createCountString(type, count);
        climateStatsEl.textContent = statsString;
    }
    else if (type === 'city size') {
        const statsString = createCountString(type, count);
        cityStatsEl.textContent = statsString;
    }
    else {
        const statsString = createCountString(type, count);
        locationStatsEl.textContent = statsString;
    }
}

sloganBtn.addEventListener('click', () => {
    const value = sloganInput.value;
    slogans.push(value);
    sloganInput.value = '';
    displaySlogans();
});

function displaySlogans() {
    sloganOutputEl.textContent = '';
    
    for (let slogan of slogans) {
        const ul = document.createElement('ul');
        ul.textContent = slogan;
        sloganOutputEl.append(ul);
    }
}

function backgroundColors(dropdown) {
    
    if (dropdown === 'Tropical') {
        gradientColor1 = '#859b42';
        gradientColor2 = '#91e4f0';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else if (dropdown === 'Desert') {
        gradientColor1 = '#e57f48';
        gradientColor2 = '#f7dcbd';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else if (dropdown === 'Temperate') {
        gradientColor1 = '#596c31';
        gradientColor2 = '#826233';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else if (dropdown === 'Polar') {
        gradientColor1 = '#98b0cc';
        gradientColor2 = '#e3dada';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    
    else if (dropdown === 'Mountain') {
        gradientColor3 = '#547ca4';
        gradientColor4 = '#cedced';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else if (dropdown === 'Lake') {
        gradientColor3 = '#043c74';
        gradientColor4 = '#9bd4e5';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else if (dropdown === 'Forest') {
        gradientColor3 = '#4c4c3b';
        gradientColor4 = '#b3a162';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
    else {
        gradientColor3 = '#a1d3ee';
        gradientColor4 = '#fff7e2';
        //console.log(dropdown);
        main.style.background = `linear-gradient(150deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 50%, ${gradientColor4} 100%)`;
    }
}
