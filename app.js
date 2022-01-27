// import functions and grab DOM elements

const climateDropdown = document.getElementById('climate');
const climateImg = document.getElementById('climate-image');

const cityDropdown = document.getElementById('city-size');
const cityImg = document.getElementById('city-size-image');

const locationDropdown = document.getElementById('location');
const locationImg = document.getElementById('location-image');


const sloganOutputEl = document.getElementById('slogan-output');
const sloganInputEl = document.getElementById('slogan-input');
const sloganBtnEl = document.getElementById('slogan-btn');



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
    const type = 'city-size';
    cityCount++;
    cityImg.src = `/assets/city-size-${value}.jpg`;

    displayStats(type, climateCount);
});


function displayStats(type, count) {

}