// Conversion constants
const MILES_TO_KM = 1.609344;
const KM_TO_MILES = 1 / MILES_TO_KM;
const MPG_TO_L100KM = 235.214583; // Conversion factor: 235.214583 / MPG = L/100km
const L100KM_TO_MPG = 235.214583; // Conversion factor: 235.214583 / L/100km = MPG

// Get DOM elements
const milesInput = document.getElementById('miles');
const kmInput = document.getElementById('km');
const mpgInput = document.getElementById('mpg');
const l100kmInput = document.getElementById('l100km');

// Miles to Kilometers conversion
milesInput.addEventListener('input', (e) => {
    const miles = parseFloat(e.target.value);
    if (!isNaN(miles) && miles >= 0) {
        const km = miles * MILES_TO_KM;
        kmInput.value = km.toFixed(2);
    } else if (e.target.value === '') {
        kmInput.value = '';
    }
});

kmInput.addEventListener('input', (e) => {
    const km = parseFloat(e.target.value);
    if (!isNaN(km) && km >= 0) {
        const miles = km * KM_TO_MILES;
        milesInput.value = miles.toFixed(2);
    } else if (e.target.value === '') {
        milesInput.value = '';
    }
});

// MPG to L/100km conversion
mpgInput.addEventListener('input', (e) => {
    const mpg = parseFloat(e.target.value);
    if (!isNaN(mpg) && mpg > 0) {
        const l100km = MPG_TO_L100KM / mpg;
        l100kmInput.value = l100km.toFixed(2);
    } else if (e.target.value === '') {
        l100kmInput.value = '';
    }
});

l100kmInput.addEventListener('input', (e) => {
    const l100km = parseFloat(e.target.value);
    if (!isNaN(l100km) && l100km > 0) {
        const mpg = L100KM_TO_MPG / l100km;
        mpgInput.value = mpg.toFixed(2);
    } else if (e.target.value === '') {
        mpgInput.value = '';
    }
});

// Prevent form submission on Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.activeElement.blur();
    }
});


