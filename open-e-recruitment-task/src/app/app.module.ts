import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSearchComponent,
    UserDetailComponent,
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
