import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
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

  paramSubscription!: Subscription;
  searchSubscription!: Subscription;

  ngOnInit(): void {

    this.paramSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
      const tempID = params.get('id');
      this.userIndex = tempID ? + tempID : 0;
    })
    this.searchSubscription = this.userService.searchUser(this.userIndex).subscribe({
      next: () => {
        this.isLoaded = true;
        this.userFound = true;
      },
      error: () => {
        this.isLoaded = true;
      }
    });

  }


  ngOnDestroy(): void {
    this.userFound = false;
    this.userService.foundUser = null;
    this.isLoaded = false;
    this.paramSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

}
