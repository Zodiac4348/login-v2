import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromLoginAction from '../../store/actions/login.actions';
import * as fromLoginSelector from '../../store/selectors/login.selectors';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDetails } from 'src/app/models/login-details.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginValid: boolean;
  loginForm: FormGroup; 

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(20)])
    });

    this.validateLoginStatus()
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit(): void {
    if(!this.loginForm.invalid) {
      let loginDetails: LoginDetails = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }

      this.store.dispatch(fromLoginAction.addLogin({data: loginDetails}));
    }
  } 

  validateLoginStatus(): void {
    this.store.pipe(select(fromLoginSelector.selectLoginStatus)).subscribe(status => {
      this.isLoginValid = status;
      
      if(status) {
        this.router.navigate(['home']);
      } 
    });
  }
}
