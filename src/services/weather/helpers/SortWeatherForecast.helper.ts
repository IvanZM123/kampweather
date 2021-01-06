// Import helper
import { TemperatureHelper } from "@/helpers/temperature.helper";
import { IWeatherForescast } from "../models/weather.models";

export class SortWeatherForecastHelper {
     /**
      * Responsible method of ordering the data.
      * @param weather 
      */
     sort(weather: any): IWeatherForescast[] {
          const items = this.filterOnlyDay(weather.list);
          let forescast: IWeatherForescast[] = [];
          
          for (let item of items) {
               // Calculate temperature
               const temperature = new TemperatureHelper(item.main.temp).conversionKelvinToCelcius();
               
               // Conversion wind << mph to kmh >>
               const wind = Math.round(item.wind.speed * 1.609);

               // Get data
               const humidity = item.main.humidity;
               const description = item.weather[0].description;
               const date = item.dt_txt;

               forescast.push({ temperature, wind, humidity, description, date });
          }

          return forescast;
     }

     /**
      * Responsible method of filtering the daily forecast 
      * every time it is 6:00 AM.
      * @param items 
      */
     filterOnlyDay(items: any[]) {
          let entities: any[] = [];

          for (let item of items) {
               const hours = new Date(item.dt_txt).getHours();
               if (hours === 6) entities.push(item);
          }

          return entities;
     }
};
