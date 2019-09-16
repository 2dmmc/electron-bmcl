import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class?: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/home', title: '首页', icon: ''},
  {path: '/games', title: '游戏列表', icon: ''},
  {path: '/setting', title: '设置', icon: '', class: 'bottom'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
