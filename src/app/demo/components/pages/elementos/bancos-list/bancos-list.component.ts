import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { BancosService } from 'src/app/demo/service/bancos.service';
import { Router } from '@angular/router';
import { BancoComponent } from '../../bancos/bancos.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bancos-list',
  templateUrl: './bancos-list.component.html',
  styleUrls: ['./bancos-list.component.scss'],
  providers: [MessageService]
})
export class BancosListComponent {
    constructor(
        private bancosService: BancosService,
        private router: Router
       ) { }

ngOnInit() {
this.getBancos();
}
bancos:BancoComponent[] = [];
private getBancos(){
this.bancosService.getBancosList().subscribe(data =>{
    this.bancos = data;
});
}

onGlobalFilter(table: Table, event: Event) {
table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
}
