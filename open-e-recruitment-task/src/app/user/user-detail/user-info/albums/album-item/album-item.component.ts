import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent {
  @Input() album!: Album;

  onClickAlbum(albumID: number): void{
    this.router.navigate([`/user/${this.userService.foundUser!.id}/album/${albumID}`]);
  }

  constructor(private router: Router, private userService: UserService){}
}
