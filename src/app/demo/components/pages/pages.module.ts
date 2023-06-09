import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { BancoComponent } from './bancos/bancos.component';
import { BarriosComponent } from './barrios/barrios.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { ZonasComponent } from './zonas/zonas.component';
import { ZonasPrestamosComponent } from './zonas-prestamos/zonas-prestamos.component';
import { TiposClientesComponent } from './tipos-clientes/tipos-clientes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FiadoresComponent } from './fiadores/fiadores.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { RutasComponent } from './rutas/rutas.component';
import { InconsistenciasComponent } from './inconsistencias/inconsistencias.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BancosCreatesComponent } from './elementos/bancos-creates/bancos-creates.component';
import { InputTextModule } from 'primeng/inputtext';
import { BancosListComponent } from './elementos/bancos-list/bancos-list.component';

@NgModule({
    declarations: [
    BancoComponent,
    BarriosComponent,
    CiudadesComponent,
    ZonasComponent,
    ZonasPrestamosComponent,
    TiposClientesComponent,
    ClientesComponent,
    FiadoresComponent,
    ResponsablesComponent,
    RutasComponent,
    InconsistenciasComponent,
    CheckListComponent,
    EmpleadosComponent,
    BancosCreatesComponent,
    BancosListComponent,

  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ButtonModule,
        TableModule,
        InputTextModule
    ]
})
export class PagesModule { }
