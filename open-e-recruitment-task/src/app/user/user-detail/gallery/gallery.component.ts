import { Component, OnDestroy, OnInit } from '@angular/core';
import { DisplayImage } from './display-image.model';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy  {

  displayImages!: DisplayImage[];

  ngOnInit(){
    this.displayImages = this.galleryService.gallery;
  }

  ngOnDestroy(): void {
    this.galleryService.gallery = [];
  }

  constructor(private galleryService: GalleryService) {}

}
