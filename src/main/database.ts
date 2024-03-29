import {join} from 'path';
import {Sequelize} from 'sequelize-typescript';
import {DirectoryModel} from './model/directory.model';
import {SettingModel} from './model/setting.model';
import {app} from 'electron';
import {GameSettingModel} from './model/game-setting';

const dbPath = join(app.getPath('userData'), 'bmcl.db');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
});

GameSettingModel.init({}, {
  indexes: [{
    unique: true,
    fields: ['directoryId', 'key'],
  }],
  sequelize,
});


sequelize.addModels([
  DirectoryModel,
  SettingModel,
  GameSettingModel,
]);
