import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Registrar Medicamento',  icon:'fact_check', class: '' },
    { path: '/medicamentos', title: 'Entrada de Medicamentos',  icon:'login', class: '' },
    { path: '/table-list', title: 'Salidas de Medicamentos',  icon:'logout', class: '' },
    { path: '/table-list', title: 'Medicamentos',  icon:'list_alt', class: '' },
    { path: '/table-list', title: 'Base de Salidas',  icon:'receipt_long', class: '' },
    { path: '/table-list', title: 'Informes',  icon:'picture_as_pdf', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
