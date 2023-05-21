import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/demo/api/rest.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  public empleados:any =[]
  constructor(private RestService:RestService){}

  ngOnInit():void{
    this.cargarData()
  }

  public cargarData(){
    this.RestService.get('http://localhost:8080/api/v1/empleados')
    .subscribe(respuesta =>{
       this.empleados = respuesta;
    })
  }
}
