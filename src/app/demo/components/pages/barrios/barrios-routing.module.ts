import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarriosComponent } from './barrios.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: BarriosComponent }
])],
exports: [RouterModule]
})
export class BarriosRoutingModule { }
