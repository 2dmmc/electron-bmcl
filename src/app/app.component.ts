import {Component} from '@angular/core';
import {DatabaseService, ElectronService} from './@core/services';
import {TranslateService} from '@ngx-translate/core';
import {AppConfig} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private databaseService: DatabaseService,
  ) {
    translate.setDefaultLang('zh-cn');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

    this.initDatabase();
  }

  public async initDatabase(): Promise<void> {
    const initStatus = await this.databaseService.initial();
    console.log(initStatus);
  }
}
