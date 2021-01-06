export class TemperatureHelper {
     temp: number;

     constructor(temp: number) {
          this.temp = temp;
     }

     conversionKelvinToCelcius(): number {
          return Math.round(this.temp - 273.15);
     }
}
