import {DirectoryModel} from '../model/directory.model';
import {IGame} from '../../app/@model/game.interface';
import {GameService} from './game.service';

export class DirectoryService {
  public static async list(): Promise<IGame[]> {
    return DirectoryModel.findAll()
      .map(async (e) => {
        const game = e.toJSON() as IGame;
        const gameService = new GameService(e);
        game.versions = await gameService.listVersions();
        return game;
      });
  }

  public static async listFavorite(): Promise<DirectoryModel[]> {
    return DirectoryModel.findAll({
      where: {
        isFavorite: true,
      },
    });
  }

  public static async add(name: string, path: string): Promise<DirectoryModel> {
    return DirectoryModel.create({
      name, path
    });
  }

  public static async remove(name: string): Promise<void> {
    await DirectoryModel.destroy({
      where: {name},
    });
  }

  public static async getByName(name: string): Promise<DirectoryModel> {
    return DirectoryModel.findOne({where: {name}});
  }

  public static async markFavorite(name: string): Promise<void> {
    await DirectoryModel.update({isFavorite: true}, {
      where: {name},
    });
  }

  public static async unmarkFavorite(name: string): Promise<void> {
    await DirectoryModel.update({isFavorite: false}, {
      where: {name},
    });
  }

  public static async setCurrentVersion(name: string, version: string): Promise<void> {
    const dir = await this.getByName(name);
    if (!dir) {
      throw new Error('no such directory');
    }
    const game = new GameService(dir);
    const versions = await game.listVersions();
    if (!versions.find((e) => e.name === version)) {
      throw new Error('no such version');
    }
    dir.currentVersion = version;
    await dir.save();
  }
}
