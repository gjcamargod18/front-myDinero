import { NgModule } from '@angular/core';
import { InconsistenciasComponent } from './inconsistencias.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
      { path: '', component: InconsistenciasComponent }
  ])],
  exports: [RouterModule]
})
export class InconsistenciasRoutingModule { }
