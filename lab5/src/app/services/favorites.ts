import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from './weather';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<WeatherData[]>([]);
  public favorites$: Observable<WeatherData[]> = this.favoritesSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        const favorites = JSON.parse(saved);
        this.favoritesSubject.next(favorites);
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    }
  }

  getFavorites(): WeatherData[] {
    return this.favoritesSubject.value;
  }

  addFavorite(weather: WeatherData): void {
    const current = this.favoritesSubject.value;
    if (!this.isFavorite(weather.id)) {
      const updated = [...current, weather];
      this.favoritesSubject.next(updated);
      this.saveToLocalStorage(updated);
    }
  }

  removeFavorite(weatherId: string): void {
    const current = this.favoritesSubject.value;
    const updated = current.filter((weather) => weather.id !== weatherId);
    this.favoritesSubject.next(updated);
    this.saveToLocalStorage(updated);
  }

  isFavorite(weatherId: string): boolean {
    return this.favoritesSubject.value.some((weather) => weather.id === weatherId);
  }

  clearFavorites(): void {
    this.favoritesSubject.next([]);
    localStorage.removeItem('favorites');
  }

  private saveToLocalStorage(favorites: WeatherData[]): void {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }
}
