// Import helpers
import { TemperatureHelper } from "@/helpers/temperature.helper";

// Imports models
import { IWeather } from "../models/weather.models";

export class SortWeatherHelper {
     /**
      * Responsible method of ordering the data.
      * @param weather 
      */
     sort(weather: any): IWeather {
          // Conversions.
          const temperature: number = new TemperatureHelper(weather.main.temp).conversionKelvinToCelcius();
          const { lat: latitude, lon: longitude } = weather.coord;

          return {
               city: weather.name,
               country: weather.sys.country,
               humidity: weather.main.humidity,
               wind: Math.round(weather.wind.speed * 1.609),
               clime: weather.weather[0].description,
               temperature,
               latitude,
               longitude
          };
     }
}
