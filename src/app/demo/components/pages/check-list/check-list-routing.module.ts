import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './check-list.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: '', component: CheckListComponent }
])],
exports: [RouterModule]
})
export class CheckListRoutingModule { }
