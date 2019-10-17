import {selectors} from '../views/base';


export const timeOfDay = (sun) => {

    const time = sun.icon;
    let str = time.split('');
    
    if(str[2] === 'd') {
        if (`${sun.main}` == 'Clear') {
            selectors.container.style.backgroundImage = "url('../img/clear.jpeg')";
        } else if(`${sun.main}` == 'Thunderstorm') {
            selectors.container.style.backgroundImage = "url('../img/thunder.jpeg')";
        } else if(`${sun.main}` == 'Drizzle') {
            selectors.container.style.backgroundImage = "url('../img/drizzle.jpeg')";
        } else if(`${sun.main}` == 'Mist') {
            selectors.container.style.backgroundImage = "url('../img/mist.jpeg')";
        } else if(`${sun.main}` == 'Smoke') {
            selectors.container.style.backgroundImage = "url('../img/mist.jpeg')";
        } else if(`${sun.main}` == 'Rain') {
            selectors.container.style.backgroundImage = "url('../img/rain.jpeg')";
        } else if(`${sun.main}` == 'Haze') {
            selectors.container.style.backgroundImage = "url('../img/haze.jpeg')";
        } else if(`${sun.main}` == 'Dust') {
            selectors.container.style.backgroundImage = "url('../img/haze.jpeg')";
        } else if(`${sun.main}` == 'Fog') {
            selectors.container.style.backgroundImage = "url('../img/mist.jpeg')";
        } else if(`${sun.main}` == 'Sand') {
            selectors.container.style.backgroundImage = "url('../img/sand.jpeg')";
        } else if(`${sun.main}` == 'Ash') {
            selectors.container.style.backgroundImage = "url('../img/sand.jpeg')";
        } else if(`${sun.main}` == 'Squall') {
            selectors.container.style.backgroundImage = "url('../img/squall.jpeg')";
        } else if(`${sun.main}` == 'Tornado') {
            selectors.container.style.backgroundImage = "url('../img/tornado.jpeg')";
        } else if(`${sun.main}` == 'Clouds') {
            selectors.container.style.backgroundImage = "url('../img/clouds.jpg')";
        } else {
            selectors.container.style.backgroundImage = "url('../img/default.jpeg')";    
        }

    } else if(str[2] === 'n') {
        if (`${sun.main}` == 'Clear') {
            selectors.container.style.backgroundImage = "url('../img/clearnight.jpg')";
        } else if(`${sun.main}` == 'Thunderstorm') {
            selectors.container.style.backgroundImage = "url('../img/thundernight.jpeg')";
        } else if(`${sun.main}` == 'Drizzle') {
            selectors.container.style.backgroundImage = "url('../img/drizzlenight.jpeg')";
        } else if(`${sun.main}` == 'Mist') {
            selectors.container.style.backgroundImage = "url('../img/mistnight.jpeg')";
        } else if(`${sun.main}` == 'Smoke') {
            selectors.container.style.backgroundImage = "url('../img/mistnight.jpeg')";
        } else if(`${sun.main}` == 'Rain') {
            selectors.container.style.backgroundImage = "url('../img/rainnight.jpeg')";
        } else if(`${sun.main}` == 'Haze') {
            selectors.container.style.backgroundImage = "url('../img/haze.jpeg')";
        } else if(`${sun.main}` == 'Dust') {
            selectors.container.style.backgroundImage = "url('../img/haze.jpeg')";
        } else if(`${sun.main}` == 'Fog') {
            selectors.container.style.backgroundImage = "url('../img/mist.jpeg')";
        } else if(`${sun.main}` == 'Sand') {
            selectors.container.style.backgroundImage = "url('../img/sand.jpeg')";
        } else if(`${sun.main}` == 'Ash') {
            selectors.container.style.backgroundImage = "url('../img/sand.jpeg')";
        } else if(`${sun.main}` == 'Squall') {
            selectors.container.style.backgroundImage = "url('../img/squall.jpeg')";
        } else if(`${sun.main}` == 'Tornado') {
            selectors.container.style.backgroundImage = "url('../img/tornado.jpeg')";
        } else if(`${sun.main}` == 'Clouds') {
            selectors.container.style.backgroundImage = "url('../img/cloudsnight.jpeg')";
        } else {
            selectors.container.style.backgroundImage = "url('../img/clearnight.jpg')";  
        }
        
    } else {
        console.log('something went wrong');
    }
 };