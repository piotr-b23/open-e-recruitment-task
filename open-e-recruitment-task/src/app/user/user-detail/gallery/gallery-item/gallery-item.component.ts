import { Component, Input } from '@angular/core';
import { DisplayImage } from '../display-image.model';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Input() displayImage!: DisplayImage;
  @Input() displayImageIndex!: number;

  isClicked: boolean = false;

  registerClick(){
    this.isClicked = true;
    this.galleryService.registerClick(this.displayImageIndex);
  }

  constructor(private galleryService: GalleryService) {}

}
