import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserWarningComponent } from './user/user-detail/user-warning/user-warning.component';
import { UserWelcomeComponent } from './user/user-detail/user-welcome/user-welcome.component';
import { UserInfoComponent } from './user/user-detail/user-info/user-info.component';
import { AlbumsComponent } from './user/user-detail/user-info/albums/albums.component';
import { ImageListComponent } from './user/user-detail/image-list/image-list.component';
import { AlbumItemComponent } from './user/user-detail/user-info/albums/album-item/album-item.component';
import { ImageItemComponent } from './user/user-detail/image-list/image-item/image-item.component';
import { GalleryComponent } from './user/user-detail/gallery/gallery.component';
import { GalleryItemComponent } from './user/user-detail/gallery/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSearchComponent,
    UserDetailComponent,
    UserWarningComponent,
    UserWelcomeComponent,
    UserInfoComponent,
    AlbumsComponent,
    ImageListComponent,
    AlbumItemComponent,
    ImageItemComponent,
    GalleryComponent,
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
