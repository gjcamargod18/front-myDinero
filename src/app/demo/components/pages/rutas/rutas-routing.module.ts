import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasComponent } from './rutas.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
      { path: '', component: RutasComponent }
  ])],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
