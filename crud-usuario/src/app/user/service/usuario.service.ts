import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Usuario } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  teste$ =  Observable<Usuario[]>;
  private url = 'http://localhost:8080/user';
  private endPoint = 'user';

  constructor(private httpClient :HttpClient) {
  }

  findAll():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url);
  }

  delete(id:number):Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url);
  }

  findById(id:number):Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url);
  }

}
