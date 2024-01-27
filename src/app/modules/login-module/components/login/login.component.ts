import { Component } from '@angular/core';
import { UserSignIn } from "@app/modules/login-module/models/user";
import { ValidadeFormService } from "@app/modules/login-module/services/validade-form.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public validadeFormService: ValidadeFormService) {
    this.postForm = this.validadeFormService.validateLoginForm();
  }

  postForm;
  userSignin = {} as UserSignIn

  login(): void {
    this.postForm.reset();
  }
}
