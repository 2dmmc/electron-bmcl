import {RouterModule, Routes} from '@angular/router';
import {BmclLayoutComponent} from './bmcl-layout.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [{
  path: '',
  component: BmclLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  }, {
    path: 'setting',
    loadChildren: 'app/setting/setting.module#SettingModule'
  }, {
    path: 'games',
    loadChildren: 'app/games/games.module#GamesModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmclLayoutRoutingModule {
}
