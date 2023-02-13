import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  @ViewChild('f',{static: true}) searchForm!: NgForm;


  onSubmit():void {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + this.searchForm.value.userID).subscribe(user => {
      console.log(user);
    })
  }

  constructor(private http: HttpClient){}

}
