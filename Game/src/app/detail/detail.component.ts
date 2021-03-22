import { Component, OnInit } from '@angular/core';
import {Game} from '../Models/game';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
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
