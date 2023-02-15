import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  initials!: string;
  user!: string;
  address!: string;
  city!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initials = this.userService.createInitials();
    this.user = this.userService.foundUser!.name;
    this.address = `${this.userService.foundUser!.address.street} ${this.userService.foundUser!.address.suite}`;
    this.city = this.userService.foundUser!.address.city;
  }



}
