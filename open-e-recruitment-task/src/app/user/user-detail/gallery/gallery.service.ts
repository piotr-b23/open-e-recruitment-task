import { Injectable } from '@angular/core';
import { DisplayImage } from './display-image.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  gallery: DisplayImage[] = [];

  pushToGallery(image: DisplayImage): void {
  this.gallery.push(image);
  }

  registerClick(imageIndex: number): void {
    this.gallery[imageIndex].clickCounter += 1;
  }

  


  constructor() { }
}
