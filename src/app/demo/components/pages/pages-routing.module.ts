import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'bancos', loadChildren: () => import('./bancos/banco.module').then(m => m.BancoModule) },
        { path: 'barrios', loadChildren: () => import('./barrios/barrios.module').then(m => m.BarriosModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: 'ciudades', loadChildren: () => import('./ciudades/ciudades.module').then(m => m.CiudadesModule) },
        { path: 'zonas', loadChildren: () => import('./zonas/zonas.module').then(m => m.ZonasModule) },
        { path: 'zonas-prestamos', loadChildren: () => import('./zonas-prestamos/zonas-prestamos.module').then(m => m.ZonasPrestamosModule) },
        { path: 'tipos-cliente', loadChildren: () => import('./tipos-clientes/tipos-clientes.module').then(m => m.TiposClientesModule) },
        { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
        { path: 'fiadores', loadChildren: () => import('./fiadores/fiadores.module').then(m => m.FiadoresModule) },
        { path: 'responsables', loadChildren: () => import('./responsables/responsables.module').then(m => m.ResponsablesModule) },
        { path: 'rutas', loadChildren: () => import('./rutas/rutas.module').then(m => m.RutasModule) },
        { path: 'inconsistencias', loadChildren: () => import('./inconsistencias/inconsistencias.module').then(m => m.InconsistenciasModule) },
        { path: 'check-list', loadChildren: () => import('./check-list/check-list.module').then(m => m.CheckListModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
