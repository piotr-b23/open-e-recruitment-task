import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageArray: Image[] = [];
  startPosition: number = 0;
  limit: number = 4;
  currentPage: number = 1;
  totalImages!: number;
  totalPages!: number;

  getImages(albumIndex: number, nextPage?: number): Observable<any>{
    this.imageArray = [];
    let searchParams = new HttpParams();
    if(nextPage){
      if(nextPage === 1){
        this.startPosition = 0;
      }
      else{
        this.startPosition = this.limit * (nextPage - 1);
      }
      
      this.currentPage = nextPage;
    }
    searchParams = searchParams.append('_start', this.startPosition);
    searchParams = searchParams.append('_limit', this.limit);

    return this.http
    .get<any>(`https://jsonplaceholder.typicode.com/album/${albumIndex}/photos`,{
      params: searchParams,
      observe: 'response'
    })
    .pipe(
      map(response => {
        this.totalImages = +response.headers.get('X-Total-Count')!;
        this.imageArray = response.body;
        if(!this.totalPages){
          this.totalPages = this.calculatePages();
        }
      return this.imageArray;
    }));
  }

  calculatePages(){
    console.log(this.totalImages / this.limit);
    return this.totalImages / this.limit;
  }

  constructor(private http: HttpClient) { }
}
