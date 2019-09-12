import {Component, OnInit} from '@angular/core';
import {SettingService} from './setting.service';

@Component({
  selector: 'app-home',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService) {
  }

  ngOnInit() {
    alert(this.settingService.getByKey('2333'));
  }

}
