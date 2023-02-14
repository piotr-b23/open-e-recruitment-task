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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSearchComponent,
    UserDetailComponent,
    UserWarningComponent,
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
