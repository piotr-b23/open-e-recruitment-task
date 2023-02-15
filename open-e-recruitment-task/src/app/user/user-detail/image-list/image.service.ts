import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageArray: Image[] = [];

  getImages(albumIndex: number): Observable<any>{
    this.imageArray = [];

    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('_start', this.startPosition);
    // searchParams = searchParams.append('_limit', this.endPosition);

    return this.http
    .get<any>(`https://jsonplaceholder.typicode.com/album/${albumIndex}/photos`)
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
