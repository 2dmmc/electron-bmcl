import {SettingModel} from '../model/setting.model';
import {JavaService} from './java.service';

export enum EnumSettingKey {
  javas = 'javas',
}

export class SettingService {
  public static async getByKey(key: EnumSettingKey): Promise<string> {
    const setting = await SettingModel.findOne({
      where: {key},
    });
    if (!setting) {
      return null;
    } else {
      return setting.value;
    }
  }

  public static async setByKey(key: EnumSettingKey, value: string | object): Promise<void> {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    await SettingModel.upsert({
      key, value,
    });
  }

  public static async init() {
    const javas = await this.getByKey(EnumSettingKey.javas);
    if (!javas) {
      const javaHome = await JavaService.getDefaultJava();
      if (javaHome) {
        await this.setByKey(EnumSettingKey.javas, [javaHome]);
      }
    }
  }
}
