import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "@app/modules/login-module/pages/login-page/login-page.component";
import { RecoveryPasswordPageComponent } from "@app/modules/login-module/pages/recovery-password-page/recovery-password-page.component";


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'recovery-password', component: RecoveryPasswordPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {

}
