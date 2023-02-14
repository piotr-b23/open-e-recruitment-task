import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userFound: boolean = false;
  userIndex!: number;
  isLoaded: boolean = false;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const tempID = params.get('id');
      this.userIndex = tempID? + tempID : 0;
    })
          this.userService.searchUser(this.userIndex).subscribe({
        next: () =>{
          this.isLoaded = true;
          this.userFound = true;
        },
        error: (error) => {
          this.isLoaded = true;
          }
      });
    
  }


  ngOnDestroy(): void {
    this.userFound = false;
    this.userService.foundUser = null;
    this.isLoaded = false;


  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

}
