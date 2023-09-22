import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:"",component: HomeComponent
},{
  path:"usuario",
  loadChildren: ()=> import('./user/user-list/user-list.module').then(modulo => modulo.UserListModule)
},{
  path:"cadastrar",
  loadChildren: ()=> import('./user/user-create/user-create.module').then(modulo => modulo.UserCreateModule)
},{
  path:"cadastrar/:id",
  loadChildren: ()=> import('./user/user-create/user-create.module').then(modulo => modulo.UserCreateModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
