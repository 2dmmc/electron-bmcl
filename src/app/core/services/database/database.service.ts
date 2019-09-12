import {Injectable} from '@angular/core';
import {Loki} from '@lokidb/loki';
import {app} from 'electron';
import {join} from 'path';
import {FSStorage} from '@lokidb/fs-storage';

@Injectable()
export class DatabaseService {
  public readonly db: Loki;
  private readonly dir: string;

  public constructor() {
    this.dir = app.getPath('userData');
    this.db = new Loki(join(this.dir, 'db.db'));
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
