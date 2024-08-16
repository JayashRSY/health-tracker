import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ActivityComponent } from './components/activity/activity.component';

const routes: Routes = [
  { path: 'add-user', component: UserFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'activity', component: ActivityComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
