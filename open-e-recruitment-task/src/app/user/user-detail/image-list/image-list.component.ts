import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Image } from './image.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit, OnDestroy {

  images: Image[] = [];
  albumIndex!: number;
  pageNumber!: number;
  totalPages!: number;
  
  paramSubscription!: Subscription;
  imageSubscription!: Subscription;

  ngOnInit(){

    this.paramSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      const tempID = params.get('albumid');
      this.pageNumber = 1;
      this.albumIndex = tempID? + tempID : 0;
      this.imageSubscription = this.imageService.getImages(this.albumIndex,this.pageNumber).subscribe(images => {
        this.images = images;
        this.totalPages = this.imageService.totalPages;
        
      });
    })
    this.pageNumber = this.imageService.currentPage;


  }

  onPrevPage(){
    if(this.pageNumber > 1){
      this.imageSubscription = this.imageService.getImages(this.albumIndex, this.pageNumber -1).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  onNextPage(){

    if(this.pageNumber < this.totalPages){
      this.imageSubscription = this.imageService.getImages(this.albumIndex, this.pageNumber + 1).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  onSubmit(page: number){

    if(page <= this.totalPages && page >= 1){
      this.imageSubscription = this.imageService.getImages(this.albumIndex, page).subscribe(images => {
        this.images = images;
        this.pageNumber = this.imageService.currentPage;
      });
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.imageSubscription.unsubscribe();
  }

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

}
