import {Injectable} from '@angular/core';
import {Loki} from '@lokidb/loki';
import {join} from 'path';
import {FSStorage} from '@lokidb/fs-storage';
import {ElectronService} from '..';

@Injectable()
export class DatabaseService {
  public readonly db: Loki;
  private readonly dir: string;

  public constructor(electronService: ElectronService) {
    this.dir = electronService.remote.app.getPath('userData');
    this.db = new Loki(join(this.dir, 'bmcl.db'));
  }

  public async initial() {
    const db = this.db;
    await db.initializePersistence({
      adapter: new FSStorage(),
      autosave: true,
      autosaveInterval: 10e3,
    });
    await db.loadDatabase();
  }
}
