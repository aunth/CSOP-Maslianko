import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherData } from '../services/weather';
import { FavoritesService } from '../services/favorites';
import { WeatherDetailModal } from '../weather-detail-modal/weather-detail-modal';

@Component({
  selector: 'app-weather-table',
  standalone: true,
  imports: [CommonModule, WeatherDetailModal],
  templateUrl: './weather-table.html',
  styleUrl: './weather-table.css',
})
export class WeatherTable implements OnInit {
  weatherData: WeatherData[] = [];
  loading: boolean = false;
  error: string | null = null;
  selectedWeather: WeatherData | null = null;
  showModal: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private favoritesService: FavoritesService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadWeather();
  }

  async loadWeather(): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      this.weatherData = await this.weatherService.getWeatherForAllCities();
    } catch (error) {
      this.error = 'Не вдалося завантажити дані про погоду';
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  onRowClick(weather: WeatherData): void {
    this.selectedWeather = weather;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedWeather = null;
  }

  toggleFavorite(weather: WeatherData, event: Event): void {
    event.stopPropagation();
    if (this.favoritesService.isFavorite(weather.id)) {
      this.favoritesService.removeFavorite(weather.id);
    } else {
      this.favoritesService.addFavorite(weather);
    }
  }

  isFavorite(weather: WeatherData): boolean {
    return this.favoritesService.isFavorite(weather.id);
  }
}

