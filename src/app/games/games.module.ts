import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesRoutingModule} from './games-routing.module';

import {GamesComponent} from './games.component';
import {MaterialModule} from '../app.module';
import {SharedModule} from '../@shared/shared.module';
import {GamesService} from './games.service';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule {
}
