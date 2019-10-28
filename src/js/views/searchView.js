import {selectors} from './base';

// Display City name
export const renderCity = city => {
    const header = `
    <h2 class="weather__city-title">${city.name}</h2>
    `;
    selectors.displayCity.insertAdjacentHTML('afterbegin', header);
} 

// MAIN TEMP AND DATE
// rounds temp to whole number
const roundTemp = (convert) => {
    const display = Math.round(convert);
    return display;
}; 

const toFahrenheit = (celsuis) => {
    const fahrenheit = (celsuis * 1.8) + 32;
    return fahrenheit;
};

export const renderMainTemp = tempMain => {
    const main = `
    <div class="weather__main-temps--1">
        <p>${roundTemp(tempMain.temp)}&#8451;</p>
    </div>
    <div class="weather__main-temps--2">
        <p>${roundTemp(toFahrenheit(tempMain.temp))}&#8457;</p>
    </div>
    `;

    selectors.displayTemp.insertAdjacentHTML('afterbegin', main);
}

// TEMPERATURE HAS BEEN SET TO CELSIUS IN THE URL 
export const rendertemp = temperature => {
    const degree = `
    <div class="weather__main-temp--min">
        <svg class="weather__main-temp--min--1">
            <use xlink:href="assets/sprite.svg#icon-arrow-long-down"></use>
        </svg> 
        <p>${roundTemp(temperature.temp_min)}&#8451;</p>
    </div>
    <div class="weather__main-temp--max"> 
        <svg class="weather__main-temp--max--2">
            <use xlink:href="assets/sprite.svg#icon-arrow-long-up"></use>
        </svg>
        <p>${roundTemp(temperature.temp_max)}&#8451;</p>
    </div>
    `;
    selectors.displayMinMax.insertAdjacentHTML('beforeend', degree); 
} 

// DESCRIPTION AND ICON
export const renderWeather = result => {
    const markup = ` 
    <p class="weather__desc-main">${result.main}</p>
    <i class="owf owf-${result.id}"></i>
   
    `;
    selectors.displayMain.insertAdjacentHTML('beforeend', markup);
    
}

// SUNSET AND RISE for geoweather only

const convertHM = value => {

    let date = new Date(value * 1000);
    let timeStr = date.toLocaleTimeString().match(/\d{2}:\d{2}|[AMP]+/g).join(' ');
    return timeStr;
};

export const setRise = time => {

    const sun = `
    <div class="weather__set">
        <div class="weather__set-rise">
            <svg class="weather__set-icon-1">
                <use xlink:href="assets/sprite.svg#icon-sunrise"></use>
            </svg>
            <p>${convertHM(time.sunrise)}</p>
        </div>
        <div class="weather__set-fall">
            <svg class="weather__set-icon-2">
                <use xlink:href="assets/sprite.svg#icon-sunset"></use>
            </svg>
            <p>${convertHM(time.sunset)}</p>
        </div>
    </div>
    `
    selectors.displayRise.insertAdjacentHTML('beforeend', sun);
}

// humidity and pressure windspeed

export const conditions = desc => {
    const tempDesc = `
    <div class="weather__condition-description">
       <p>${desc.description}</p>
    </div>
    `;
    selectors.displayConditions.insertAdjacentHTML('beforeend', tempDesc);
};

export const pressure = pre => {

    const tempInfo = `
        <div class="weather__condition-humidity">
            <p>Humidity ${pre.humidity}%</p>
        </div>
        <div class="weather__condition-pressure">
            <p>Pressure ${pre.pressure} hpa</p>
        </div>
    `;

    selectors.displayConditions.insertAdjacentHTML('beforeend', tempInfo)
};

export const wind = perhour => {
    const windSpeed = `
    <div class="weather__condition-wind">
        <p>Wind Speed ${perhour.speed}km/h</p>
    </div>
    `;
    selectors.displayConditions.insertAdjacentHTML('beforeend', windSpeed);
};

export const clearSearch = () => {
   selectors.cityInput.value = "";
};

export const clearCity = () => {
    selectors.displayCity.innerHTML = "";
    selectors.displayMinMax.innerHTML = "";
    selectors.displayMain.innerHTML = "";
    selectors.displayTemp.innerHTML = "";
    selectors.displayRise.innerHTML = "";
    selectors.displayConditions.innerHTML = "";
};

// Message when geolocation is not avaiable
export const noGeolocation = () => {
    
    const noLocation = `
    <h2 class="weather__city-error">Enter your city in the search box to view the weather</h2>
    `;

    selectors.displayCity.insertAdjacentHTML('beforeend', noLocation);
};

export const clearDate = () => {
    selectors
};


