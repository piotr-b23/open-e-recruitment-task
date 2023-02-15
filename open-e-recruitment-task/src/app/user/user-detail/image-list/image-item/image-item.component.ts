import { Component, Input } from '@angular/core';
import { DisplayImage } from '../../gallery/display-image.model';
import { GalleryService } from '../../gallery/gallery.service';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {

  @Input() image!: Image;

  onClickImage(){
    const tempImage: DisplayImage = new DisplayImage(this.image.title,this.image.url);

    this.galleryService.pushToGallery(tempImage);
  }

  constructor(private galleryService: GalleryService) { }
}
