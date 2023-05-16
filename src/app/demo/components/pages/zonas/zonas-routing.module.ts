import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonasComponent } from './zonas.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: ZonasComponent }
])],
exports: [RouterModule]
})

export class ZonasRoutingModule { }
