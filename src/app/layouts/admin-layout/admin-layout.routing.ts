import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { MedicamentosComponent } from 'app/medicamentos/medicamentos.component';
import { EntradaMedicamentosComponent } from 'app/entrada-medicamentos/entrada-medicamentos.component';
import { SalidaMedicamentosComponent } from 'app/salida-medicamentos/salida-medicamentos.component';
import { BaseSalidasComponent } from 'app/base-salidas/base-salidas.component';
import { InformesComponent } from 'app/informes/informes.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'medicamentos',   component: MedicamentosComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'entrada-medicamentos',component: EntradaMedicamentosComponent },
    { path: 'salida-medicamentos',component: SalidaMedicamentosComponent },
    { path: 'base-salidas',component: BaseSalidasComponent },
    { path: 'informes',  component: InformesComponent },
];