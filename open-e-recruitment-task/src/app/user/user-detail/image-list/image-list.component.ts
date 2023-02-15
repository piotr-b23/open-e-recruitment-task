import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];

  ngOnInit(){
    this.imageService.getImages(2).subscribe(images => {
      this.images = images;
    });
  }

  constructor(private imageService: ImageService) { }

}
