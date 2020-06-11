const { Weather } = require('./weather');
const { Db } = require('./database');
const { Element } = require('./element');

// Use database
const database = new Db();
const {city, countryCode}= database.getLocationData();

// Use weather
const weather = new Weather(city, countryCode);

// Use element
const element = new Element();

async function fetchWeather() {
    const data = await weather.getWeather()
    element.render(data);
}


document.querySelector('#data').addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e)
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    
    weather.changeLocation(city, country);
    database.setLocationData(city, country);
    fetchWeather();

});