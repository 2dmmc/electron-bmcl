import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [{
  path: '',
  redirectTo: 'games',
  pathMatch: 'full'
}, {
  path: '',
  children: [{
    path: '',
    loadChildren: './@layouts/bmcl-layout/bmcl-layout.module#BmclLayoutModule'
  }],
}];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
