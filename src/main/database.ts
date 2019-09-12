import {join} from 'path';
import {Sequelize} from 'sequelize-typescript';
import {DirectoryModel} from './model/directory.model';
import {SettingModel} from './model/setting.model';
import {app} from 'electron';

const db = this.db = new Sequelize( {
  dialect: 'sqlite',
  storage: join(app.getPath('userData'), 'bmcl.db'),
});

db.addModels([
  DirectoryModel,
  SettingModel,
]);
