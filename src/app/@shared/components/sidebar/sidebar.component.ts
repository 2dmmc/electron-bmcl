import {Component, OnInit} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

export interface RouteInfo {
  path: string;
  title: string;
  type: 'sub' | 'link';
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
  class?: string;
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}


export const ROUTES: RouteInfo[] = [
  // {path: '/home', title: '首页', icon: ''},
  {path: '/games', title: '客户端列表', type: 'link', icontype: 'apps'},
  {path: '/setting', title: '设置', type: 'link', icontype: 'apps', class: 'nav-item-bottom'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public perfectScrollbar: PerfectScrollbar;

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      this.perfectScrollbar = new PerfectScrollbar(elemSidebar);
    }
  }

  public updatePS(): void  {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.perfectScrollbar.update();
    }
  }

  private isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
