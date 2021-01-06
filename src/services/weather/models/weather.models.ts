export interface IWeather {
     city: string;
     country: string;
     humidity: number;
     wind: number;
     clime: string;
     temperature: number;
     latitude: number;
     longitude: number;
}

export interface IWeatherForescast {
     temperature: number;
     wind: number;
     humidity: number;
     description: string;
     date: string;
}
