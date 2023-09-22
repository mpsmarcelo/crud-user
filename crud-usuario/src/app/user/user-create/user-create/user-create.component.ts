import { Observable } from 'rxjs';
import { Usuario } from './../../model/usuario.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit{

  formGroup :  FormGroup;
  userId : number | undefined;
  usuario$ : Observable<Usuario> | undefined;
  private sub: any;
  constructor(private formBuilder : FormBuilder,
              private route : ActivatedRoute,
              private usuarioService : UsuarioService ){
      {
        this.formGroup = this.formBuilder.group({
          nome:  [Validators.required,Validators.min(3),Validators.max(50)],
          email: [Validators.required],
          senha: [Validators.required,Validators.min(6),Validators.max(20)]
        })
      }
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      // this.usuario$ =  this.usuarioService.findById(params['id']);
   });
  }

  salvar(){

  }

  deletar(){

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
