import {selectors} from '../views/base';


export const timeOfDay = (sun) => {

    const time = sun.icon;
    let str = time.split('');
    
    if(str[2] === 'd') {
        if (`${sun.main}` == 'Clear') {
            selectors.container.style.backgroundImage = "url('assets/clear.jpeg')";
        } else if(`${sun.main}` == 'Thunderstorm') {
            selectors.container.style.backgroundImage = "url('assets/thunder.jpeg')";
        } else if(`${sun.main}` == 'Drizzle') {
            selectors.container.style.backgroundImage = "url('assets/drizzle.jpeg')";
        } else if(`${sun.main}` == 'Mist') {
            selectors.container.style.backgroundImage = "url('assets/mist.jpeg')";
        } else if(`${sun.main}` == 'Smoke') {
            selectors.container.style.backgroundImage = "url('assets/mist.jpeg')";
        } else if(`${sun.main}` == 'Rain') {
            selectors.container.style.backgroundImage = "url('assets/rain.jpeg')";
        } else if(`${sun.main}` == 'Haze') {
            selectors.container.style.backgroundImage = "url('assets/haze.jpeg')";
        } else if(`${sun.main}` == 'Dust') {
            selectors.container.style.backgroundImage = "url('assets/haze.jpeg')";
        } else if(`${sun.main}` == 'Fog') {
            selectors.container.style.backgroundImage = "url('assets/mist.jpeg')";
        } else if(`${sun.main}` == 'Sand') {
            selectors.container.style.backgroundImage = "url('assets/sand.jpeg')";
        } else if(`${sun.main}` == 'Ash') {
            selectors.container.style.backgroundImage = "url('assets/sand.jpeg')";
        } else if(`${sun.main}` == 'Squall') {
            selectors.container.style.backgroundImage = "url('assets/squall.jpeg')";
        } else if(`${sun.main}` == 'Tornado') {
            selectors.container.style.backgroundImage = "url('assets/tornado.jpeg')";
        } else if(`${sun.main}` == 'Clouds') {
            selectors.container.style.backgroundImage = "url('assets/clouds.jpg')";
        } else {
            selectors.container.style.backgroundImage = "url('assets/default.jpeg')";    
        }

    } else if(str[2] === 'n') {
        if (`${sun.main}` == 'Clear') {
            selectors.container.style.backgroundImage = "url('assets/clearnight.jpg')";
        } else if(`${sun.main}` == 'Thunderstorm') {
            selectors.container.style.backgroundImage = "url('assets/thundernight.jpeg')";
        } else if(`${sun.main}` == 'Drizzle') {
            selectors.container.style.backgroundImage = "url('assets/drizzlenight.jpg')";
        } else if(`${sun.main}` == 'Mist') {
            selectors.container.style.backgroundImage = "url('assets/mistnight.jpeg')";
        } else if(`${sun.main}` == 'Smoke') {
            selectors.container.style.backgroundImage = "url('assets/mistnight.jpeg')";
        } else if(`${sun.main}` == 'Rain') {
            selectors.container.style.backgroundImage = "url('assets/rainnight.jpeg')";
        } else if(`${sun.main}` == 'Haze') {
            selectors.container.style.backgroundImage = "url('assets/haze.jpeg')";
        } else if(`${sun.main}` == 'Dust') {
            selectors.container.style.backgroundImage = "url('assets/haze.jpeg')";
        } else if(`${sun.main}` == 'Fog') {
            selectors.container.style.backgroundImage = "url('assets/mist.jpeg')";
        } else if(`${sun.main}` == 'Sand') {
            selectors.container.style.backgroundImage = "url('assets/sand.jpeg')";
        } else if(`${sun.main}` == 'Ash') {
            selectors.container.style.backgroundImage = "url('assets/sand.jpeg')";
        } else if(`${sun.main}` == 'Squall') {
            selectors.container.style.backgroundImage = "url('assets/squall.jpeg')";
        } else if(`${sun.main}` == 'Tornado') {
            selectors.container.style.backgroundImage = "url('assets/tornado.jpeg')";
        } else if(`${sun.main}` == 'Clouds') {
            selectors.container.style.backgroundImage = "url('assets/cloudsnight.jpeg')";
        } else {
            selectors.container.style.backgroundImage = "url('assets/clearnight.jpg')";  
        }
        
    } else {
        console.log('something went wrong');
    }
 };