import * as Bluebird from 'bluebird';
import {readdir, stat} from 'fs-extra';
import {DirectoryModel} from '../model/directory.model';
import {join} from 'path';
import {IVersion} from '../../app/@model/version.interface';

export class GameService {
  public constructor(private directory: DirectoryModel) {
  }

  public async listVersions(): Promise<Array<IVersion>> {
    const path = join(this.directory.path, 'versions');
    const files = await readdir(path);
    return Bluebird.filter(files, async (file) => {
      const s = await stat(join(path, file));
      return s.isDirectory();
    })
      .map((name) => ({name}));
  }
}
