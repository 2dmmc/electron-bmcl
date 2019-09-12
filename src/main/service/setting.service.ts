import {SettingModel} from '../model/setting.model';

export class SettingService {
  public static async getByKey(key: string): Promise<string> {
    return SettingModel.findOne({
      where: {key},
    });
  }
}
