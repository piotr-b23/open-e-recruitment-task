import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  @ViewChild('f',{static: true}) searchForm!: NgForm;

  foundUser!: User;


  onSubmit():void {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + this.searchForm.value.userID).subscribe(user => {
      console.log(user);
      this.foundUser = user;
      console.log(this.foundUser.address.street);
    })
  }

  constructor(private http: HttpClient){}

}
