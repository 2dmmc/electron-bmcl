import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';

import {GamesComponent} from './games.component';
import {MaterialModule} from '../app.module';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    GamesRoutingModule
  ],
  providers: [
  ]
})
export class GamesModule {
}
