import {Component, OnInit} from '@angular/core';
import {GamesService} from './games.service';
import {IGamesList} from '../@model/games-list.interface';


@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private games: IGamesList;

  constructor(
    private gamesService: GamesService,
  ) {
    this.games = {
      total: [],
      favorite: [],
    };
  }

  ngOnInit() {
    this.gamesService.getGamesList()
      .subscribe((games: IGamesList) => {
        this.games = games;
      });
  }
}
