import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ElectronService} from '..';
import {DirectoryService} from '../../../../main/service/directory.service';
import {IGame} from '../../../@model/game.interface';
import {IGamesList} from '../../../@model/games-list.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private directoryService: typeof DirectoryService;

  constructor(electronService: ElectronService) {
    const rendererService = electronService.remote.require('./src/main/renderer-service');
    this.directoryService = rendererService.DirectoryService;
  }

  private getList(): Observable<IGame[]> {
    return from(this.directoryService.list());
  }

  public getGamesList(): Observable<IGamesList> {
    return new Observable<IGamesList>(observer => {
      this.getList().subscribe((games: IGame[]) => {
        observer.next({
          total: games,
          favorite: games.filter((e) => e.isFavorite)
        });
      });
    });
  }
}
