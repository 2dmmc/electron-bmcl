import {join} from 'path';
import {Sequelize} from 'sequelize-typescript';
import {DirectoryModel} from './model/directory.model';
import {SettingModel} from './model/setting.model';
import {app} from 'electron';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(app.getPath('userData'), 'bmcl.db'),
});

sequelize.addModels([
  DirectoryModel,
  SettingModel,
]);
