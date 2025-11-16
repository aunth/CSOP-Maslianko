import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { WeatherData } from './weather';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<WeatherData[]>([]);
  public favorites$: Observable<WeatherData[]> = this.favoritesSubject.asObservable();
  private storageInitialized = false;

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage(): Promise<void> {
    try {
      await this.storage.create();
      this.storageInitialized = true;
      const saved = await this.storage.get('favorites');
      if (saved) {
        this.favoritesSubject.next(saved);
      }
    } catch (error) {
      console.error('Error initializing storage:', error);
    }
  }

  getFavorites(): WeatherData[] {
    return this.favoritesSubject.value;
  }

  async addFavorite(weather: WeatherData): Promise<void> {
    const current = this.favoritesSubject.value;
    if (!this.isFavorite(weather.id)) {
      const updated = [...current, weather];
      this.favoritesSubject.next(updated);
      await this.saveToStorage(updated);
    }
  }

  async removeFavorite(weatherId: string): Promise<void> {
    const current = this.favoritesSubject.value;
    const updated = current.filter((weather) => weather.id !== weatherId);
    this.favoritesSubject.next(updated);
    await this.saveToStorage(updated);
  }

  isFavorite(weatherId: string): boolean {
    return this.favoritesSubject.value.some((weather) => weather.id === weatherId);
  }

  async clearFavorites(): Promise<void> {
    this.favoritesSubject.next([]);
    await this.storage.remove('favorites');
  }

  private async saveToStorage(favorites: WeatherData[]): Promise<void> {
    if (!this.storageInitialized) {
      await this.initStorage();
    }
    try {
      await this.storage.set('favorites', favorites);
    } catch (error) {
      console.error('Error saving favorites to storage:', error);
    }
  }
}
