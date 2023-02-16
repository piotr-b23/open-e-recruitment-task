import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  foundUser!: User | null;

  searchUser(index: number): Observable<any>{
    return this.http
    .get<any>('https://jsonplaceholder.typicode.com/users/' + index)
    .pipe(map(response => {
      this.foundUser = response as User;
    }));
  }

  createInitials(): string{ 
    return this.foundUser!.name.split(' ').map((n)=>n[0]).join('.') + '.';
  }

  constructor(private http: HttpClient) { }
}
