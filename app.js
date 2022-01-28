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



// let state

let climateCount = 0;
let cityCount = 0;
let locationCount = 0;

let slogans = [];

//climate dropdown
climateDropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    const type = 'climate';
    climateCount++;
    climateImg.src = `/assets/climate-${value}.jpg`;

    displayStats(type, climateCount);
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