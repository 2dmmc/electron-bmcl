import {Injectable} from '@angular/core';
import {ElectronService} from '..';
import {DirectoryService} from '../../../../main/service/directory.service';
import {IGame} from '../../../@model/game.interface';
import {DirectoryModel} from '../../../../main/model/directory.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private directoryService: typeof DirectoryService;

  constructor(electronService: ElectronService) {
    const rendererService = electronService.remote.require('./src/main/renderer-service');
    this.directoryService = rendererService.DirectoryService;
  }

  public async getList(): Promise<IGame[]> {
    return await this.directoryService.list();
  }

  public async getFavoriteList(): Promise<DirectoryModel[]> {
    return await this.directoryService.listFavorite();
  }

}
