import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  startPosition: number = 0;
  endPosition: number = 3;
  albumsArray: Album[] = [];

  getAlbums(index: number): Observable<any>{

    let searchParams = new HttpParams();
    searchParams = searchParams.append('_start', this.startPosition);
    searchParams = searchParams.append('_limit', this.endPosition);

    return this.http
    .get<any>(`https://jsonplaceholder.typicode.com/users/${index}/albums`, {
      params: searchParams,
    })
    .pipe(map(response => {
      
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.albumsArray.push({ ...response[key]});
        }
      }
      return this.albumsArray;
    }));
  }

  constructor(private http: HttpClient) { }
}
