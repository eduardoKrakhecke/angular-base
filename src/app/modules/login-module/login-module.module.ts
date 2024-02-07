import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from "@app/modules/login-module/login-routing.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RecoveryPasswordPageComponent } from './pages/recovery-password-page/recovery-password-page.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    RecoveryPasswordPageComponent,
    RecoveryPasswordComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModuleModule { }
