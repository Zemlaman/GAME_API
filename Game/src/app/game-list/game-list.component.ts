import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Game} from '../Models/game';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  title = 'Game';

  games: Game[] = [];
  url = 'http://127.0.0.1:8080/GameAPI/api/games';

  name = '';
  price = '';
  developer = '';
  publisher = '';
  rating = '';
  ageRestriction = '';

  constructor(private http: HttpClient, private router: Router) {
    this.ngOnInit();
  }


  addGame(): void {
    const body = {
      name: this.name,
      price: this.price,
      developer: this.developer,
      publisher: this.publisher,
      rating: this.rating,
      ageRestriction: this.ageRestriction
    };
    this.http.post('api/games', body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }
  deleteGame(id: number): void {
    this.router.navigateByUrl('delete/' + id);
  }

  ngOnInit(): void {
    this.http.get('api/games').subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
