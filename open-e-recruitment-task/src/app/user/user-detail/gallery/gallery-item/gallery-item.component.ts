import { Component, Input } from '@angular/core';
import { DisplayImage } from '../display-image.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Input() displayImage!: DisplayImage;

}
