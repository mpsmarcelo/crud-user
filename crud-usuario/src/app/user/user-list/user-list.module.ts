import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserListComponent } from './user-list/user-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [  UserListComponent ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserListModule { }
