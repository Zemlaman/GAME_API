import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from './game-list/game-list.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'register', component: UsersComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'games', component: GameListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
