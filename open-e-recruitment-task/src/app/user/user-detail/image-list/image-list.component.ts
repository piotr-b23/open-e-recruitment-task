import { Component, Input, OnInit } from '@angular/core';
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
  totalPages!: number;
  

  ngOnInit(){

    this.route.paramMap.subscribe((params: ParamMap) => {
      const tempID = params.get('albumid');
      this.pageNumber = 1;
      this.albumIndex = tempID? + tempID : 0;
      this.imageService.getImages(this.albumIndex,this.pageNumber).subscribe(images => {
        this.images = images;
        this.totalPages = this.imageService.totalPages;
        
      });
    })
    this.pageNumber = this.imageService.currentPage;


  }

  onPrevPage(){
    if(this.pageNumber > 1){
      this.imageService.getImages(this.albumIndex, this.pageNumber -1).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  onNextPage(){

    if(this.pageNumber < this.totalPages){
      this.imageService.getImages(this.albumIndex, this.pageNumber + 1).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  onSubmit(page: number){

    if(page <= this.totalPages && page >= 1){
      this.imageService.getImages(this.albumIndex, page).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

}
