import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.css',
})
export class ImageViewerComponent {
  imagePath: string = '';
  imageError: string = '';

  onImageError(): void {
    this.imageError = 'Не вдалося завантажити зображення. Перевірте шлях.';
  }

  onImageLoad(): void {
    this.imageError = '';
  }

  clearImage(): void {
    this.imagePath = '';
    this.imageError = '';
  }
}
