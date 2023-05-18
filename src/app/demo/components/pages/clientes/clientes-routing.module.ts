import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';



@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
      { path: '', component: ClientesComponent}
  ])],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
