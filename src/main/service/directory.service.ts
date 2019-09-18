import {DirectoryModel} from '../model/directory.model';

export class DirectoryService {
  public static async list(): Promise<DirectoryModel[]> {
    return DirectoryModel.findAll();
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
}
