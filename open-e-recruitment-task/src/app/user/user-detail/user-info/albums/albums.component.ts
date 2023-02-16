import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  albumSubscription!: Subscription;

  constructor(private albumService: AlbumsService, private userService: UserService) { }

  ngOnInit(): void {

    this.albumSubscription = this.albumService.getAlbums(this.userService.foundUser!.id).subscribe(albums => {
      this.albums = albums;
      this.limit = this.albumService.limit;
    });

  }

  ngOnDestroy(): void{
    this.albumService.clean();
    this.albumSubscription.unsubscribe();
  }

  //adjustPage: -1 for going back in list, limit for going up in list
  changeAlbum(adjustPage: number): void{
    if (this.isDone){
      this.isDone = false;
      this.albumSubscription = this.albumService.getSpecificAlbum(this.userService.foundUser!.id, this.albumService.startPosition + adjustPage, 1).subscribe(()=>{
        this.isDone = true;
      });
    }
   
  }

}
