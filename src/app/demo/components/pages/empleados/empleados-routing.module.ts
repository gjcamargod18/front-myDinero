import { NgModule } from '@angular/core';
import { EmpleadosComponent } from './empleados.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component:EmpleadosComponent }
])],
exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
