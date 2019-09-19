import {Component, OnInit} from '@angular/core';
import {DirectoryService} from '../../main/service/directory.service';
import {SettingService} from '../../main/service/setting.service';
import {ElectronService} from '../@core/services';

@Component({
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  private settingService: typeof SettingService;
  private directoryService: typeof DirectoryService;

  constructor(electronService: ElectronService) {
    const rendererService = electronService.remote.require('./src/main/renderer-service');
    this.settingService = rendererService.SettingService;
    this.directoryService = rendererService.DirectoryService;
    console.log(this.settingService);
  }

  async ngOnInit() {
    const username = await this.settingService.getByKey('username');
    console.log(username);
    const directories = await this.directoryService.list();
    console.log(directories);
  }

}
