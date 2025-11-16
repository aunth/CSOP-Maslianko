import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../services/weather';
import { FavoritesService } from '../services/favorites';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites-list.html',
  styleUrl: './favorites-list.css',
})
export class FavoritesList implements OnInit, OnDestroy {
  favorites: WeatherData[] = [];
  private subscription?: Subscription;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
    this.subscription = this.favoritesService.favorites$.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  async removeFavorite(weather: WeatherData): Promise<void> {
    await this.favoritesService.removeFavorite(weather.id);
  }

  async clearAll(): Promise<void> {
    if (confirm('Ви впевнені, що хочете очистити всі вибрані елементи?')) {
      await this.favoritesService.clearFavorites();
    }
  }
}
