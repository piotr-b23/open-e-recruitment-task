import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Album } from './album.model';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];

  constructor(private albumService: AlbumsService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.albumService.getAlbums(this.userService.foundUser!.id).subscribe(albums => {
      this.albums = albums;
    });

  }

  onClickAlbum(albumID: number){
    console.log('clicked album of id ' + albumID);
  }


}
