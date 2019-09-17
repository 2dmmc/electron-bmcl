import {NgModule} from '@angular/core';
import {BmclLayoutRoutingModule} from './bmcl-layout.routing';
import {BmclLayoutComponent} from './bmcl-layout.component';
import {SharedModule} from '../../@shared/shared.module';

@NgModule({
  imports: [
    BmclLayoutRoutingModule,
    SharedModule,
  ],
  declarations: [
    BmclLayoutComponent,
  ]
})

export class BmclLayoutModule {
}
