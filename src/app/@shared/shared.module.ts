import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import {WebviewDirective} from './directives/';
import {FooterComponent, NavbarComponent, PageNotFoundComponent, SidebarComponent} from './components';
import {RouterModule} from '@angular/router';

const directives = [
  WebviewDirective
];

const components = [
  FooterComponent,
  NavbarComponent,
  PageNotFoundComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    ...directives,
    ...components
  ],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [TranslateModule, WebviewDirective, SidebarComponent, NavbarComponent, FooterComponent]
})
export class SharedModule {
}
