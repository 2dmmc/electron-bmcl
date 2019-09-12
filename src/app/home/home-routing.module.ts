import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {SettingComponent} from './setting/setting.component';
import {SettingModule} from './setting/setting.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
