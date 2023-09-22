import { UsuarioService } from './../../service/usuario.service';
import { Observable, delay } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario.model';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { MessageService } from '../../service/message.service';


const ELEMENT_DATA: Usuario[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nome', 'email', 'senha', 'btnEditar','btnDelete'];


  dataSource = ELEMENT_DATA;

  constructor( private usuarioService: UsuarioService,
               private formBuilder : FormBuilder,
               public router: Router,
               private menssage: MessageService
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
     this.usuarioService.delete(id).subscribe(result =>{
        if(result){
          this.menssage.success("Usuário removido com successo!")
          this.listar();
        }
     });
   }

   editar(id :number){
      this.router.navigate(['/cadastrar',id]);
   }
}
