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
  private url = '/api/user';
  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }
  clickedButton() {
    const body = {
      username: this.username,
      password: this.password
    }
    this.router.navigate(['/login']);
    this.http.post('/api/user', body, {observe: 'response'}).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/login']);
        }, (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.http.get('/api/user').subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
