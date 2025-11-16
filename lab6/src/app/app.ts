import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTable } from './weather-table/weather-table';
import { FavoritesList } from './favorites-list/favorites-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeatherTable, FavoritesList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Практична робота №6 - Погода з Ionic Storage';
}
