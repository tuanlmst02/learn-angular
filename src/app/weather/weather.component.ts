import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp = null;
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
      .then(resJson => {
        this.cityName = this.txtCityName;
        this.temp = resJson;
        this.isLoading = false;
      })
      .catch(err => {
        this.isLoading = false;
        alert('Can not find your city');
        this.cityName = '';
        this.txtCityName = '';
      });

  }

  getMessage() {
    if (this.isLoading) {
      return 'Loading.....';

    }
    return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
  }

}
