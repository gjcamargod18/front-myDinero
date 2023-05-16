import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BancoComponent}  from './bancos.component'

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: BancoComponent }
])],
})
export class BancoRoutingModule { }
