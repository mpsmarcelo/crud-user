import { Observable } from 'rxjs';
import { Usuario } from './../../model/usuario.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent implements OnInit{

  formGroup :  FormGroup;
  userId : number | undefined;
  listUser$ : Usuario[] | undefined;
  private sub: any;
  constructor(private formBuilder : FormBuilder,
              private route : ActivatedRoute,
              private usuarioService : UsuarioService,
              private notifierService: NotifierService){
      {
        this.formGroup = this.formBuilder.group({
          id:[''],
          nome:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
          email: ['', Validators.required],
          senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
        })
      }
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.usuarioService.findById(params['id']).subscribe(item=>{
        this.formGroup.patchValue(item);
      });
   });
  }

  salvar(){
   this.usuarioService.create(this.formGroup.value).subscribe((result)=>{
      if(result){
        this.notifierService.notify('succcess',"Usuário salvo com successo!")
      }
   } );
  }

  deletar(){
    this.usuarioService.delete(this.formGroup.value?.id).subscribe(result =>{
      if(result){
      this.limpar();
      }
  });
  }


  limpar(){
    this.formGroup.reset();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
