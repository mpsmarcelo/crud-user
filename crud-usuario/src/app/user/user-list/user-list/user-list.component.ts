import { UsuarioService } from './../../service/usuario.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';


const ELEMENT_DATA: Usuario[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit{

  listUser$ : Observable<Usuario[]> | undefined;
  displayedColumns: string[] = ['id', 'nome', 'email', 'senha', 'btnEditar','btnDelete'];


  dataSource = ELEMENT_DATA;

  constructor( private usuarioService: UsuarioService,
               private formBuilder : FormBuilder,
             ){}

  ngOnInit(){
      this.listar();
  }

  listar(){
    this.usuarioService.findAll().subscribe(item =>{
      this.dataSource = item;
});
   }

   remover(id : number){
     this.usuarioService.delete(id);
   }
}
