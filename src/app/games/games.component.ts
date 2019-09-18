import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ElectronService, GamesService} from '../@core/services';
import {IGame} from '../@model/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private games: {
    total: IGame[],
    favorite: IGame[],
  };

  constructor(electronService: ElectronService,
              private gamesService: GamesService) {
    this.games = {
      total: [],
      favorite: [],
    };
  }

  async ngOnInit() {
    const remoteGames = await this.gamesService.getList();
    this.games = {
      total: remoteGames,
      favorite: remoteGames.filter((e) => e.isFavorite)
    };
    console.log(this.games);
  }
}
