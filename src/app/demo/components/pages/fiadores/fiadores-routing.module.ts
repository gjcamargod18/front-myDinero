import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiadoresComponent } from './fiadores.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild([
      { path: '', component: FiadoresComponent }
  ])],
  exports: [RouterModule]
})
export class FiadoresRoutingModule { }
