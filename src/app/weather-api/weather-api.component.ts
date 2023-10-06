import { Component } from '@angular/core';
import { WeatherDataService } from '../services/weather-api/weather-data.service';
import { FormControl, Validators } from '@angular/forms'; // Import Validators and FormControl
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})

export class WeatherApiComponent {

  city: string = '';
  weatherData: any;
  weatherCondition: string = '';
  errorMessage: string = '';
  weatherImage: string = 'Cold.JPG'; // Default image filename

  //Checking if the input is letters ONLY
  cityControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'), // Allow only letters and spaces
  ]);

  // Define a mapping of weather conditions to image URLs or filenames
  weatherImageMapping: { [key: string]: string } = {
    Clear: 'Sunny.gif',
    Thunderstorm: 'Thunderstorm.gif',
    Drizzle: 'Drizzle.gif',
    Rain: 'Rain.gif',
    Snow: 'Snow.gif',
    Clouds: 'Cloudy.gif',
    Fog: 'Fog.gif',
    Tornado: 'Tornado.gif',
  };

  constructor(private weatherService: WeatherDataService, private datePipe: DatePipe) { }

  getWeather() {
    this.errorMessage = ''; // Clear previous error messages
    const city = this.cityControl.value;
    

    if (city) {
      this.weatherService.getWeather(city).subscribe(
        (data) => {
          this.weatherData = data;

          if (this.weatherData.main && this.weatherData.main.temp) {

            // Convert temperature from Kelvin to Celsius and round to one decimal place
            this.weatherData.main.temp = (this.weatherData.main.temp - 273.15).toFixed(1);
            this.weatherData.main.feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(1);
            this.weatherData.main.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(1);
            this.weatherData.main.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(1);
          }
          this.weatherCondition = this.weatherData.weather[0].main;

          // Convert wind speed from m/s to km/h
          if (this.weatherData.wind && this.weatherData.wind.speed) {
            this.weatherData.wind.speed = (this.weatherData.wind.speed * 3.6).toFixed(2);
          }

          // Convert sunrise and sunset times to readable format
          if (this.weatherData.sys && this.weatherData.sys.sunrise) {
            this.weatherData.sys.sunrise = this.datePipe.transform(
              new Date(this.weatherData.sys.sunrise * 1000), // Convert Unix timestamp to milliseconds
              'hh:mm a' // Specify the format, e.g., 'hh:mm a' for 12-hour time format
            );
          }

          if (this.weatherData.sys && this.weatherData.sys.sunset) {
            this.weatherData.sys.sunset = this.datePipe.transform(
              new Date(this.weatherData.sys.sunset * 1000),
              'hh:mm a'
            );
          }

          this.weatherImage = this.weatherImageMapping[this.weatherCondition] || 'Cold.JPG';
          this.weatherData.main.pressure = (this.weatherData.main.pressure * 0.01).toFixed(2) + ' mb'; //Convertig pressure from hPa to mb

          //Converting the visibility values to human readable format
          const visibilityMeters = this.weatherData.visibility;
          let visibilityLabel: string;
          
          if (visibilityMeters >= 10000) {
            visibilityLabel = 'Excellent';
          } else if (visibilityMeters >= 5000) {
            visibilityLabel = 'Good';
          } else if (visibilityMeters >= 1000) {
            visibilityLabel = 'Fair';
          } else {
            visibilityLabel = 'Poor';
          }

          this.weatherData.visibility = visibilityLabel;

        },
        (error) => {
          this.errorMessage = 'Invalid city! Please review your input.'; // Set error message in case of invalid input
          console.error(error);
        }
      );


    } else {
      this.errorMessage = 'Please enter a city!'; // Set error message in case of empty input
    }
  }

}
