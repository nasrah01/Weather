import {weatherKey} from '../config';
import axios from 'axios';


export default class WeatherSearch {
    constructor(cityName) {
        this.cityName = cityName;
    }

    async getResults() {
        try {
            const result = await axios (`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${weatherKey}`);
            this.main = result.data;
            this.temp = result.data.main;
            this.res = result.data.weather[0];
            this.sun = result.data.sys;
            this.wind = result.data.wind;
            console.log(result);
        
        } catch(error) {
            console.log(`${error} something went wrong with getting the results`);
        }  
    }
}

