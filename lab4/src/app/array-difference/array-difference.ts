import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-difference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-difference.html',
  styleUrl: './array-difference.css',
})
export class ArrayDifferenceComponent {
  @Input() numbers: number[] = [];

  getDifference(): number {
    if (!this.numbers || this.numbers.length === 0) {
      return 0;
    }

    const max = Math.max(...this.numbers);
    const min = Math.min(...this.numbers);

    return max - min;
  }

  getMax(): number | null {
    if (!this.numbers || this.numbers.length === 0) {
      return null;
    }
    return Math.max(...this.numbers);
  }

  getMin(): number | null {
    if (!this.numbers || this.numbers.length === 0) {
      return null;
    }
    return Math.min(...this.numbers);
  }
}
