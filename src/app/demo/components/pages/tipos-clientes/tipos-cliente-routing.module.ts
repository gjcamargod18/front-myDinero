import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TiposClientesComponent } from './tipos-clientes.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: TiposClientesComponent }
])],
exports: [RouterModule]
})
export class TiposClienteRoutingModule { }
