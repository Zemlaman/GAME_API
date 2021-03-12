import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private url = '/api/games';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }

  clickedButton() {
    if (this.password === this.password) {
      this.http.post(this.url, {email: this.email, password: this.password}).subscribe(
        (data: any) => {
          this.router.navigate(['/games']);
        }, (error) => {

        }
      );
    }
  }

    ngOnInit() {

  }
}
