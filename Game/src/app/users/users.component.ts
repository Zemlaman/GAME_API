import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Game} from '../Models/game';
import {User} from '../Models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  private url = 'http://localhost:4200/TotallyMyAppXd/api/user/register';
  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }

  clickedButton() {
    this.http.post(this.url, {username: this.username, password: this.password}, {responseType: 'text'}).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {

  }
}
