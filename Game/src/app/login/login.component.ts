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
  private url = 'http://localhost:4200/TotallyMyAppXd/api/user/login';
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }



  clickedButton() {
    if (this.password === this.password) {
      this.http.post(this.url, {username: this.username, password: this.password},
        {responseType: 'text'}).subscribe(
        (data: any) => {
          this.router.navigate(['/games']);
        }, (error) => {
          console.error(error);
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
