import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isDone: boolean = true;
  limit!: number;

  constructor(private albumService: AlbumsService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.albumService.getAlbums(this.userService.foundUser!.id).subscribe(albums => {
      this.albums = albums;
      this.limit = this.albumService.limit;
    });

  }

  ngOnDestroy(): void{
    this.albumService.clean();
  }

  //adjustPage: -1 for going back in list, limit for going up in list
  changeAlbum(adjustPage: number): void{
    if (this.isDone){
      this.isDone = false;
      this.albumService.getSpecificAlbum(this.userService.foundUser!.id, this.albumService.startPosition + adjustPage, 1).subscribe(()=>{
        this.isDone = true;
      });
    }
   
  }

}
