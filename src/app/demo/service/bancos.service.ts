import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BancoComponent } from '../components/pages/bancos/bancos.component';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

    private baseURL = 'http://localhost:8080/bancos/'
    private urlPost = 'http://localhost:8080/bancos/saveBancos'

  constructor(private httpClient:HttpClient) { }

  getBancosList(): Observable<BancoComponent[]>{
    return this.httpClient.get<BancoComponent[]>(`${this.baseURL}`);
  }

  createBanco(banco:BancoComponent): Observable<Object>{
    return this.httpClient.post(`${this.urlPost}`, banco);
  }

  updateBanco(codigo:number, banco:BancoComponent): Observable<object>{
    return this.httpClient.put(`${this.urlPost}/${codigo}`, banco);
  }

  deleteBanco(codigo:number): Observable<Object>{
    return this.httpClient.delete(`${this.urlPost}/${codigo}`);
  }

}
