import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  startPosition: number = 0;
  limit: number = 3;
  albumsArray: Album[] = [];


  getAlbums(
    index: number,
  ): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('_start', this.startPosition);
    searchParams = searchParams.append('_limit', this.limit);

    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/users/${index}/albums`, {
        params: searchParams,
      })
      .pipe(
        map((response) => {
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              this.albumsArray.push({ ...response[key] });
            }
          }
          return this.albumsArray;
        })
      );
  }

  getSpecificAlbum(
    index: number,
    startPosition: number,
    limit: number
  ): Observable<any> {
    
    let searchParams = new HttpParams();
    searchParams = searchParams.append('_start', startPosition);
    searchParams = searchParams.append('_limit', limit);

    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/users/${index}/albums`, {
        params: searchParams,
      })
      .pipe(
        map((response) => {
          if (response.length > 0) {
            if (startPosition > this.startPosition) {
              for (const key in response) {
                if (response.hasOwnProperty(key)) {
                  this.albumsArray.push(response[key]);
                  this.albumsArray.splice(0, 1);
                }
              }
              this.startPosition += 1;
            } else {
              for (const key in response) {
                if (response.hasOwnProperty(key)) {
                  this.albumsArray.splice(2, 1);
                  this.albumsArray.splice(0, 0, response[key]);                
                }
              }
              this.startPosition -= 1;
            }
          } else {
          }
          return this.albumsArray;
        })
      );
  }

  clean() {
    this.startPosition = 0;
    this.limit = 3;
    this.albumsArray = [];
  }

  constructor(private http: HttpClient) {}
}
