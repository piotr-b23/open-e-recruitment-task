import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  @ViewChild('f',{static: true}) searchForm!: NgForm;
  userIndex!: number;


  onSubmit():void {
      this.userService.searchUser(this.userIndex).subscribe({
        next: () =>{
          this.router.navigate(['/user/' + this.userIndex]);
        },
        error: (error) => {
          if (error.status === 404){
            this.router.navigate(['/user/' + this.userIndex]);

          } else {
            //display error message
          }
          }
      });
  }

  constructor(private userService: UserService, private router: Router){}

}
