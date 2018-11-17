import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonValidators } from 'ng-validator';
import { errorMessage } from '@sources/formErrorMessage';
import { AuthService } from '@services/auth/auth.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleAlertComponent } from '@modals/simple-alert/simple-alert.component';

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

  /**
   * 
   * @param fb
   * @param router 
   * @param authSrv 
   * @param ls
   * @param dialog
   */

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSrv: AuthService,
    private ls: LocalStorageService,
    private dialog: MatDialog
  ) {

    // it creates the form if the login
    this.loginForm = this.fb.group({
      email: ['mi@correo.com', [ Validators.required, CommonValidators.isEmail ]],
      password: ['123', Validators.required]
    });

  }

  /**
   * It sends the data for logining
   */

  public login(): void {

    if (this.loginForm.invalid) return;

    this.isLogin = true;

    this.authSrv.login( this.loginForm.value ).subscribe( 
      res => {
        
        if (res.token) {
          this.ls.setToken( res.token );
          this.ls.setUser( res.user );
          this.ls.setModules( res.modules );
          this.router.navigate(['']);
        }

        this.isLogin = false;

      }, 
      
      err => {
        this.isLogin = false;
        console.log(err);
        this.showSimpleDialog( 'No pudo iniciar sesión', err.message );
      }
    );

  }

  /**
   * 
   * @param title Title of the dialog
   * @param message Message of the dialog
   * @returns returns the dialog instances
   */

  private showSimpleDialog(title: string, message: string = 'Error desconocido'): MatDialogRef<SimpleAlertComponent> {
    return this.dialog.open( SimpleAlertComponent , {
      data: { title, message }
    });
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
