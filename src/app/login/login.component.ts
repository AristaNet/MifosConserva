import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonValidators } from 'ng-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isLogin: boolean = false;
  public isShowingPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, CommonValidators.isEmail ]],
      password: ['', Validators.required]
    });

  }

  // Inicia session
  public login(): void {
    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);

    this.isLogin = true;

    setTimeout(() => {
      this.isLogin = false; 
      this.router.navigate(['']);
    }, 2000);
  }

  // muestra la contraseña
  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }

  ngOnInit() {
  }

}
