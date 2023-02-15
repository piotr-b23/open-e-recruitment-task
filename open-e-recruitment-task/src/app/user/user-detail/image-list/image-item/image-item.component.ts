import { Component, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {

  @Input() image!: Image;

  onClickImage(imageID: number){

  }

}
