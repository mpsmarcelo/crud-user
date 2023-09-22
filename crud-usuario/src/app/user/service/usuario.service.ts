import { Usuario } from './../model/usuario.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';


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
    return this.httpClient.delete<Usuario[]>(this.url+'/'+id);
  }

  findById(id:number):Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.url+'/'+id);
  }

  create(user : Usuario):Observable<Usuario>{
    if(!user?.id){
      return this.httpClient.post<Usuario>(this.url,user);
    }else{
      return this.httpClient.put<Usuario>(this.url,user);
    }

  }

}
