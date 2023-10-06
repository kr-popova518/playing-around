import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiKey = '1f3e9a9b9ef0e19bb8f4ea7fc41c991e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
