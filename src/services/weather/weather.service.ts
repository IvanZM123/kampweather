// Import helpers
import { SortWeatherHelper } from "./helpers/SortWeather.helper";
import { SortWeatherForecastHelper } from "./helpers/SortWeatherForecast.helper";

// Import environments
import { environments } from "@/config/environments";

export class WeatherService {
     private API_KEY = environments.API_KEY_WEATHER;

     /**
      * Responsible method of obtaining the current climate 
      * and its forecasts by means of altitude and latitude.
      * @param lat
      * @param lon
      */
     async getWeatherByLatitudeAndLongitudeWithForecast(lat: number, lon: number) {
          try {
               const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${ lat }&lon=${ lon }&appid=${ this.API_KEY }&lang=es`);
               const weather = await res.json();
               return new SortWeatherForecastHelper().sort(weather);
          } catch (error) {
               return null;
          }
     }

     /**
      * Responsible method of obtaining the current climate 
      * by means of altitude and latitude.
      * @param lat 
      * @param lon 
      */
     async getWeatherByLatitudeAndLongitude(lat: number, lon: number) {
          try {
               const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ this.API_KEY }&lang=es`);
               const data = await res.json();
               return new SortWeatherHelper().sort(data);
          } catch (error) {
               return null;
          }
     }

     /**
      * Responsible method of obtaining the current climate through the city.
      * @param location 
      */
     async getWeatherByLocation(location: string) {
          try {
               const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ this.API_KEY }&lang=es`);
               const data = await res.json();
               return new SortWeatherHelper().sort(data);
          } catch (error) {
               return null;
          }
     }

     /**
      * Responsible method of obtaining the current weather 
      * and its forecasts through the city.
      * @param lat 
      * @param lon 
      */
     async getWeatherByLocationWithForescast(location: string) {
          try {
               const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ location }&appid=${ this.API_KEY }&lang=es`)
               const data = await res.json();
               return new SortWeatherForecastHelper().sort(data);
          } catch (error) {
               return null;
          }
     }
}
