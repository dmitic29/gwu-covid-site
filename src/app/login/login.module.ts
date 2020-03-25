import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


const loginRutes: Routes = [
  { path: '', component: LoginPageComponent }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRutes)
  ]
})
export class LoginModule { }
