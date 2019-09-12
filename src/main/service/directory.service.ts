import {DirectoryModel} from '../model/directory.model';

export class DirectoryService {
  public static async list() {
    return DirectoryModel.findAll();
  }
}
