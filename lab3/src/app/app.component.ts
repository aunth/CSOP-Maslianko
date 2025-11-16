import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],
  template: `
    <h1>Image Viewer</h1>
    <app-image-viewer></app-image-viewer>
  `,
})
export class AppComponent {}
