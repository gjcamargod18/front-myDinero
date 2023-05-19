import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsablesComponent } from './responsables.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
    imports: [RouterModule.forChild([
      { path: '', component: ResponsablesComponent }
  ])],
  exports: [RouterModule]
})
export class ResponsablesRoutingModule { }
