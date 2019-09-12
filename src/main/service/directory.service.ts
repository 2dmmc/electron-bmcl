import {DirectoryModel} from '../model/directory.model';

export class DirectoryService {
  public static async list(): Promise<DirectoryModel[]> {
    return DirectoryModel.findAll();
  }

  public static async add(name: string, path: string): Promise<DirectoryModel> {
    console.log(name);
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
}
