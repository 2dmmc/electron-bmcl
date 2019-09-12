import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {SettingModule} from './setting/setting.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'setting',
    component: SettingModule
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
