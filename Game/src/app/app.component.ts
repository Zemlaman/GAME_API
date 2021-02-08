import { Component } from '@angular/core';
import {Game} from "./game";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game';

  games: Game[] = [];
  url = "http://127.0.0.1:8080/GameAPI/api/games";

  id = "";
  name = "";
  price = "";
  developer = "";
  publisher = "";
  rating = "";
  ageRestriction = "";

  constructor(private http: HttpClient, private router: Router) {
    this.updateGames();
  }

  updateGames(): void {
    this.http.get(this.url).subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  addGame(): void {
    const body = {
      id: this.id,
      name: this.name,
      price: this.price,
      developer: this.developer,
      publisher: this.publisher,
      rating: this.rating,
      ageRestriction: this.ageRestriction
    };
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.updateGames();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }

  ngOnInit(): void {
  }

}
