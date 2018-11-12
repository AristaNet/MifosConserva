import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonValidators } from 'ng-validator';
import { errorMessage } from '../sources/formErrorMessage';

/**
 * Component class that manages the login page
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * It contains the form of the login
   */

  public loginForm: FormGroup;

  /**
   * It's useful to the spinner is shown
   */

  public isLogin: boolean = false;

  /**
   * It's useful to the showPasswordButton is shown
   */

  public isShowingPassword: boolean = false;

  /**
   * It contains the error messages dictionary for the inputs
   */

  public errorDict: any = errorMessage;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    // it creates the form if the login
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, CommonValidators.isEmail ]],
      password: ['', Validators.required]
    });

  }

  /**
   * It sends the data for logining
   */

  public login(): void {
    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);

    this.isLogin = true;

    setTimeout(() => {
      this.isLogin = false; 
      this.router.navigate(['']);
    }, 2000);
  }

  /**
   * It shows the password or hids the password
   */

  public showPassword(): void {
    this.isShowingPassword = !this.isShowingPassword;
  }

  ngOnInit() {
  }

}
