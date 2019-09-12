import {Injectable} from '@angular/core';
import {DatabaseService} from '../core/services';
import {Collection} from '@lokidb/loki';

interface SettingSchema {
  key: string;
  value: any;
}

@Injectable()
export class SettingService {
  private collection: Collection<SettingSchema>;
  public constructor(databaseService: DatabaseService) {
    this.collection = databaseService.db.addCollection('settings');
  }

  public getByKey(key: string) {
    const data = this.collection.findOne({key});
    if (!data) {
      return null;
    }
    return data.value;
  }

  public setByKey(key: string, value) {
    this.collection.findAndUpdate({
      key,
    }, (doc) => {
      doc.value = value;
    });
  }

  public get username(): string {
    return this.getByKey('username');
  }

  public set username(name: string) {
    this.setByKey('username', name);
  }

  public get gameDir(): string[] {
    return this.getByKey('gameDir');
  }

  public set gameDir(gameDir: string[]) {
    this.setByKey('gameDir', gameDir);
  }
}
