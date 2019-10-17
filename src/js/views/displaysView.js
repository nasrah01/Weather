import {selectors} from '../views/base';

// GENERATES AND DISPLAYS THE DATE
export const generateDate = () => {

    const date = new Date();
   
    // Day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = date.getDay();
    const dayName = days[day];

    const dayDate = date.getDate();

    // Month
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = date.getMonth();
    const monthName = months[month];

    const content = `
    <div class="weather__city-date">
    <p>${dayName}, ${monthName} ${dayDate}</p>
    </div>
    `;

    selectors.displayDate.insertAdjacentHTML('beforeend', content);
}

export const clearDate = () => {
    selectors.displayDate.innerHTML = "";
};


