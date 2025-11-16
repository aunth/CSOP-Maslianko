import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../services/weather';
import { FavoritesService } from '../services/favorites';

@Component({
  selector: 'app-weather-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-detail-modal.html',
  styleUrl: './weather-detail-modal.css',
})
export class WeatherDetailModal {
  @Input() weather!: WeatherData;
  @Output() close = new EventEmitter<void>();

  constructor(private favoritesService: FavoritesService) {}

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: Event): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.onClose();
    }
  }

  async toggleFavorite(): Promise<void> {
    if (this.favoritesService.isFavorite(this.weather.id)) {
      await this.favoritesService.removeFavorite(this.weather.id);
    } else {
      await this.favoritesService.addFavorite(this.weather);
    }
  }

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.weather.id);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}
