import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ZonasPrestamosComponent } from './zonas-prestamos.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: ZonasPrestamosComponent }
])],
exports: [RouterModule]
})
export class ZonasPrestamosRoutingModule { }
