export class Weather {
  
  constructor(city, countryCode) {
    this.apiKey = '32f843d833c38373032f825c4a92418a';
    this.city = city;
    this.countryCode = countryCode;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
  
  async getWeather() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
  
}