import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoRoutingModule } from './banco-routing.module';
import { BancoComponent } from './bancos.component';

@NgModule({
  imports: [
    CommonModule, 
    BancoRoutingModule
  ]
})
export class BancoModule { }
