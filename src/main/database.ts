import {join} from 'path';
import {Sequelize} from 'sequelize-typescript';
import {DirectoryModel} from './model/directory.model';
import {SettingModel} from './model/setting.model';
import {app} from 'electron';
import {DirectoryService} from './service/directory.service';
import {GameService} from './service/game.service';

export const sequelize = new Sequelize( {
  dialect: 'sqlite',
  storage: join(app.getPath('userData'), 'bmcl.db'),
});

sequelize.addModels([
  DirectoryModel,
  SettingModel,
]);

DirectoryService.getByName('test')
  .then(async (doc) => {
    if (!doc) {
      doc = await DirectoryService.add('test', 'E:\\BMCL');
    }
    const gameService = new GameService(doc);
    const list = await gameService.listVersions();
    console.log(list);
  })
  .catch(console.error);
