import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../Models/user';
import {Game} from '../Models/game';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'User';

  users: User[] = [];
  private url = '/api/user';
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }



  clickedButton() {
    const body = {
      username: this.username,
      password: this.password
    }
    this.router.navigate(['/games']);
    if (this.password !== null) {
      // @ts-ignore
      this.http.get(this.url, body, {observe: 'response'}).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/games']);
        }, (error) => {

        }
      );
    }
  }

    ngOnInit() {
      this.http.get(this.url).subscribe(
        (data: User[]) => {
          this.users = data;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
}
