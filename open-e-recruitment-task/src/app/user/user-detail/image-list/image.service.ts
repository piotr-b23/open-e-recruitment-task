import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageArray: Image[] = [];
  startPosition: number = 0;
  limit: number = 4;
  currentPage: number = 1;

  getImages(albumIndex: number): Observable<any>{
    this.imageArray = [];
    let searchParams = new HttpParams();
    searchParams = searchParams.append('_start', this.startPosition);
    searchParams = searchParams.append('_limit', this.limit);

    return this.http
    .get<any>(`https://jsonplaceholder.typicode.com/album/${albumIndex}/photos`,{
      params: searchParams,
    })
    .pipe(map(response => {
      
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.imageArray.push({ ...response[key]});
        }
      }
      return this.imageArray;
    }));
  }

  constructor(private http: HttpClient) { }
}
