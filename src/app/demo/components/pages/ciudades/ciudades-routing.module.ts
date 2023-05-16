import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadesComponent } from './ciudades.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: CiudadesComponent }
])],
exports: [RouterModule]
})
export class CiudadesRoutingModule { }
