import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {
initials!: string;

ngOnInit(): void{
  this.initials = this.userService.createInitials();
}

constructor(private userService: UserService) { }
}
