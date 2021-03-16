import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from '../Models/game';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class DetailComponent implements OnInit {
  private url = 'api/games/';
  game: Game;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      this.http.get(this.url + id).subscribe(
        (data: Game) => {
          this.game = data;
        }, (error) => {
          console.log(error);
        });
    });
  }

}
