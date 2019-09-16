import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BmclLayoutComponent} from './@layouts/bmcl-layout/bmcl-layout.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: BmclLayoutComponent,
    children: [{
      path: '',
      loadChildren: './@layouts/bmcl-layout/bmcl-layout.module#BmclLayoutModule'
    }]
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
