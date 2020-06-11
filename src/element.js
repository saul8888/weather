export class Element {

    constructor() {
        this.name = document.querySelector('#name');
        this.temp = document.querySelector('#temp');
        this.pres = document.querySelector('#pres');
        this.hum = document.querySelector('#hum');
    }
 
    render(weather) {
        //console.log(weather);
        this.name.textContent = 'Country: ' + weather.name;
        this.temp.textContent = 'Temperature: ' + weather.main.temp + ' °C';
        this.pres.textContent = 'Pressure: ' + weather.main.pressure + ' hPa';
        this.hum.textContent = 'Humidity: ' + weather.main.humidity;
    }
  
}