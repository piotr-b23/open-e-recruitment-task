import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Album } from './album.model';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy{
  albums!: Album[];

  constructor(private albumService: AlbumsService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.albumService.getAlbums(this.userService.foundUser!.id).subscribe(albums => {
      this.albums = albums;
    });

  }

  ngOnDestroy(){
    this.albumService.clean();
  }

  onPrevAlbum(){
    
  }

  onNextAlbum(){
    this.albumService.getSpecificAlbum(this.userService.foundUser!.id, this.albumService.startPosition + this.albumService.limit, 1).subscribe();
  }

}
