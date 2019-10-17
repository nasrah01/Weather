// default location using geolocation
import {weatherKey} from '../config';
import axios from 'axios';

export default class CurrentLocation {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }

    async getData() {
        try {
            const findWeather = await axios (`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${weatherKey}`);
            this.title = findWeather.data;
            this.name = findWeather.data.name;
            this.main = findWeather.data.main;
            this.temp = findWeather.data.weather[0];
            this.sun = findWeather.data.sys;
            this.wind = findWeather.data.wind;
            console.log(findWeather);
        
        } catch(error) {
            console.log(`${error} something went wrong with getting the results`);
        }
        
    }
}