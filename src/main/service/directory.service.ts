import {DirectoryModel} from '../model/directory.model';

export class DirectoryService {
  public static async list(): Promise<DirectoryModel[]> {
    return DirectoryModel.findAll();
  }

  public static async add(name: string, path: string): Promise<DirectoryModel> {
    return DirectoryModel.create({
      name, path
    });
  }

  public static async remove(name: string): Promise<void> {
    return DirectoryModel.destroy({
      where: {name},
    });
  }
}
