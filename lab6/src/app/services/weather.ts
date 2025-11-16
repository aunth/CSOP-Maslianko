import { Injectable } from '@angular/core';
import axios from 'axios';

export interface WeatherData {
  id: string;
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_mph: number;
    wind_dir: string;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    feelslike_c: number;
    uv: number;
  };
}

const UKRAINIAN_CITIES = [
  'Kyiv',
  'Kharkiv',
  'Odesa',
  'Dnipro',
  'Lviv',
  'Zaporizhzhia',
  'Mykolaiv',
  'Vinnytsia',
  'Poltava',
  'Chernihiv',
  'Cherkasy',
  'Sumy',
  'Khmelnytskyi',
  'Zhytomyr',
  'Kropyvnytskyi',
  'Rivne',
  'Ivano-Frankivsk',
  'Ternopil',
  'Lutsk',
  'Uzhhorod',
];

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = 'demo_key';
  private readonly apiUrl = 'https://api.weatherapi.com/v1/current.json';

  async getWeatherForAllCities(): Promise<WeatherData[]> {
    const weatherPromises = UKRAINIAN_CITIES.map((city) => this.getWeatherByCity(city));

    try {
      const results = await Promise.allSettled(weatherPromises);
      return results
        .filter((result) => result.status === 'fulfilled')
        .map((result) => (result as PromiseFulfilledResult<WeatherData>).value);
    } catch (error) {
      console.error('Error fetching weather for cities:', error);
      throw error;
    }
  }

  async getWeatherByCity(city: string): Promise<WeatherData> {
    try {
      const response = await axios.get<WeatherData>(this.apiUrl, {
        params: {
          key: this.apiKey,
          q: city,
          aqi: 'no',
        },
      });

      response.data.id = city.toLowerCase();
      return response.data;
    } catch (error) {
      console.error(`Error fetching weather for ${city}:`, error);
      return this.getMockWeatherData(city);
    }
  }

  private getMockWeatherData(city: string): WeatherData {
    return {
      id: city.toLowerCase(),
      location: {
        name: city,
        region: '',
        country: 'Ukraine',
        lat: 50.45,
        lon: 30.52,
        localtime: new Date().toISOString(),
      },
      current: {
        temp_c: Math.round(Math.random() * 30 - 5),
        temp_f: 0,
        condition: {
          text: 'Partly cloudy',
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
          code: 1003,
        },
        wind_kph: Math.round(Math.random() * 20 + 5),
        wind_mph: 0,
        wind_dir: 'NW',
        precip_mm: Math.round(Math.random() * 10 * 10) / 10,
        precip_in: 0,
        humidity: Math.round(Math.random() * 40 + 50),
        feelslike_c: 0,
        uv: Math.round(Math.random() * 5),
      },
    };
  }
}
