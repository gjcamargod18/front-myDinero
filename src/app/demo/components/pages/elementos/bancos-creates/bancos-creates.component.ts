import { Component } from '@angular/core';
import { BancosService } from 'src/app/demo/service/bancos.service';
import { Router } from '@angular/router';
import { BancoComponent } from '../../bancos/bancos.component';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-bancos-creates',
  templateUrl: './bancos-creates.component.html',
  styleUrls: ['./bancos-creates.component.scss'],
  providers: [MessageService]
})
export class BancosCreatesComponent {

    banco:BancoComponent = new BancoComponent();

    constructor(private bancoService:BancosService, private router:Router){}

    ngOnInit(): void {
    }

    private saveBanco(){
        this.bancoService.createBanco(this.banco).subscribe(data =>{
            console.log(data)


        },
        error => console.log(error)
        )
    }

    goToBancos(){
        this.router.navigate(['/bancos']);
    }

    onSubmit(){
        console.log(this.banco)
        this.saveBanco()
    }
}
