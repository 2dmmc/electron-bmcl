import {SettingModel} from '../model/setting.model';

export class SettingService {
  public static async getByKey(key: string): Promise<string> {
    const setting = await SettingModel.findOne({
      where: {key},
    });
    if (!setting) {
      return null;
    } else {
      return setting.value;
    }
  }
}
