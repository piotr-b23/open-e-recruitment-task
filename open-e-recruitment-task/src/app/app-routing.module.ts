import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './user/user-detail/image-list/image-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserSearchComponent } from './user/user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserSearchComponent},
  { path: 'user/:id', component: UserDetailComponent, children: [
    { path: 'album/:albumid', component: ImageListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
