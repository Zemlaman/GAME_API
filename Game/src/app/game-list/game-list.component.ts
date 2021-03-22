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
  url = 'api/games/';
  contentVisibility = false;
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
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.updateList();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('game/' + id);
  }
  deleteGame(id: number): void {
    window.location.reload();
    this.http.delete(this.url + id).subscribe(
      (data) => {
        console.log(data);
        this.updateList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateList(): void {
    this.http.get(this.url).subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.updateList();
  }

}
