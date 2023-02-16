import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  userIndex!: number;


  onSubmit():void {
    this.router.navigate(['/user/' + this.userIndex]);
  }

  constructor(private router: Router){}

}
