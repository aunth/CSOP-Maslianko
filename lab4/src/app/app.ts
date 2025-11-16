import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrayDifferenceComponent } from './array-difference/array-difference';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrayDifferenceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  arrayInput: string = '';

  numbers: number[] = [];

  onArrayInputChange(): void {
    if (!this.arrayInput || this.arrayInput.trim() === '') {
      this.numbers = [];
      return;
    }

    const parts = this.arrayInput.split(',');
    this.numbers = parts
      .map((part) => part.trim())
      .filter((part) => part !== '')
      .map((part) => parseFloat(part))
      .filter((num) => !isNaN(num));
  }

  clearArray(): void {
    this.arrayInput = '';
    this.numbers = [];
  }
}
