import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {WebviewDirective} from './directives/';
import {
  FooterComponent,
  GameAddButtonComponent,
  GameComponent,
  NavbarComponent,
  PageNotFoundComponent,
  SidebarComponent
} from './components';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../app.module';

const directives = [
  WebviewDirective
];

const components = [
  FooterComponent,
  NavbarComponent,
  PageNotFoundComponent,
  SidebarComponent,
  GameComponent,
  GameAddButtonComponent,
];

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    ...components
  ]
})
export class SharedModule {
}
