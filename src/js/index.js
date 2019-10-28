//global app controller
import {selectors} from './views/base';
import WeatherSearch from './models/weatherSearch';
import CurrentLocation from './models/geoWeather';
import * as searchView from './views/searchView';
import * as date from './views/displaysView';
import * as imageSearch from './models/imageSearch';

const state = {};

// CONTROLLER FOR WEATHER DATA BY GEOLOCATION
const locationController = () => {
    // getting current location

    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(success, showerror);
    }

    function success (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeather(lat, lon);
    }

    function showerror(error) {
       console.log(error);
       date.clearDate();
       searchView.noGeolocation();
    }
    
    const getWeather = async (latitude, longitude) => {
        state.find = new CurrentLocation(latitude, longitude);
        console.log(state.find);

        try {
            await state.find.getData();

             // clear the search field
             searchView.clearSearch();
             searchView.clearCity();
             date.clearDate();

             // RENDER THE DATE ON THE UI
             date.generateDate();
 
             // render city name to the UI
             searchView.renderCity(state.find.title);
             // render temperature
             searchView.renderWeather(state.find.temp);
             searchView.rendertemp(state.find.main);
             searchView.renderMainTemp(state.find.main);

             //sun rise and set / conditions
             searchView.conditions(state.find.temp);
             searchView.setRise(state.find.sun);
             searchView.pressure(state.find.main);
             searchView.wind(state.find.wind);

            // render background image
            imageSearch.timeOfDay(state.find.temp);


        } catch(err) {
            alert('geolocation sucks!');
        }
    }
}

locationController();

// CONTROLLER FOR SEARCHING LOCATION FOR WEATHER

const searchController = async () => {

    const getInput = selectors.cityInput;
    const query = getInput.value;

    if(query) {
        state.search = new WeatherSearch(query);
        console.log(state.search);

        try {
            // pulls the data for the selected city
            await state.search.getResults();

            // clear the search field
            searchView.clearSearch();
            searchView.clearCity();
            date.clearDate();

            // RENDER THE DATE ON THE UI
            date.generateDate();

            // render city name to the UI
            searchView.renderCity(state.search.main);
            // render temperature
            searchView.renderWeather(state.search.res);
            searchView.rendertemp(state.search.temp);
            searchView.renderMainTemp(state.search.temp);
            searchView.setRise(state.search.sun);

            // render weather conditions
            searchView.conditions(state.search.res);
            searchView.pressure(state.search.temp);
            searchView.wind(state.search.wind);

            //render background image 
            imageSearch.timeOfDay(state.search.res);
            
            
        } catch (err) {
            console.log(`${err} something went wrong with the search box`);
        }
    }
}

// EVENT LISTENER FOR SEARCH BOX
selectors.searchSubmit.addEventListener('submit', e => {
    e.preventDefault();
    searchController();
});



