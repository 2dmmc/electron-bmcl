import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingRoutingModule} from './setting-routing.module';

import {SettingComponent} from './setting.component';
import {SettingService} from './setting.service';

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  providers: [
    SettingService,
  ]
})
export class SettingModule {
}
