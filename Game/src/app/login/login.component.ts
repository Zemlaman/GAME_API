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
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }



  clickedButton() {
    if (this.password !== null) {
      this.http.get(this.url, {email: this.email, password: this.password}).subscribe(
        (data: any) => {
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
