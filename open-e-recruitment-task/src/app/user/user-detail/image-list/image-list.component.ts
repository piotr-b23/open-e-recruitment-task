import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Image } from './image.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  albumIndex!: number;
  pageNumber!: number;

  ngOnInit(){

    this.route.paramMap.subscribe((params: ParamMap) => {
      const tempID = params.get('albumid');
      this.albumIndex = tempID? + tempID : 0;
      this.imageService.getImages(this.albumIndex).subscribe(images => {
        this.images = images;
      });
    })
    this.pageNumber = this.imageService.currentPage;


  }

  onPrevPage(){
    this.imageService.getImages(this.albumIndex, this.pageNumber -1).subscribe(images => {
      this.images = images;
      this.pageNumber = this.imageService.currentPage;
    });
  }

  onNextPage(){
    this.imageService.getImages(this.albumIndex, this.pageNumber + 1).subscribe(images => {
      this.images = images;
      this.pageNumber = this.imageService.currentPage;
    });
  }

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

}
