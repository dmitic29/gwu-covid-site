import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login: FormGroup;
  constructor(fb: FormBuilder, private authService: AuthServiceService) {
    this.login = fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit() {
  }

  attemptLogin(): void {
    this.authService.doRegister(this.login.value.Email, this.login.value.Password);
    // console.log(this.login.value.Email + '\n' + this.login.value.Password);
  }
}
