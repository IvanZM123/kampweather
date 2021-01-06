// Import module
import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";

// Import Weather Service
import { WeatherService } from "@/services/weather/weather.service";

// Imports models
import { IWeather, IWeatherForescast } from "@/services/weather/models/weather.models";
import { IWeatherParams } from "./models/store.models";

@Module({ namespaced: true })
export class WeatherStore extends VuexModule {
     forescast: IWeatherForescast[] = [];
     weather: null | IWeather = null;

     /**
      * Assign the value to the weather property.
      * @param data 
      */
     @Mutation
     private SET_WEATHER(data: IWeather) {
          this.weather = data;
     }

     /**
      * Assign the value to the forecast property.
      * @param forescast 
      */
     @Mutation
     private SET_FORESCAST(forescast: IWeatherForescast[]) {
          this.forescast = forescast;
     }

     /**
      * In charge of obtaining the weather based on latitude and longitude
      * @param payload 
      */
     @Action
     async GET_WEATHER_BY_LAT_AND_LON(payload: IWeatherParams): Promise<void> {
          const weatherService = new WeatherService();
          const weather = await weatherService.getWeatherByLatitudeAndLongitude(payload.latitude, payload.longitude);
          const forescast = await weatherService.getWeatherByLatitudeAndLongitudeWithForecast(payload.latitude, payload.longitude);

          if (weather && forescast) {
               this.context.commit("SET_WEATHER", weather);
               this.context.commit("SET_FORESCAST", forescast);
          }
     }

     /**
      * In charge of obtaining the weather based on the city
      * @param keyword 
      */
     @Action
     async GET_WEATHER_BY_CITY(keyword: string): Promise<void> {
          const weatherService = new WeatherService();
          const weather = await weatherService.getWeatherByLocation(keyword);
          const forescast = await weatherService.getWeatherByLocationWithForescast(keyword);

          if (weather && forescast) {
               this.context.commit("SET_WEATHER", weather);
               this.context.commit("SET_FORESCAST", forescast);
          } else {
               this.context.dispatch("alert/UPDATE_ALERT",
                    {
                         text: "No se encontro la ciudad. Por favor, intentelo de nuevo.",
                         icon: "mdi-map-marker-off",
                         status: "error"
                    },
                    { root: true }
               );
          }
     }
}
