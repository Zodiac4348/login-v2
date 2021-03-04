import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromLoginAction from '../../store/actions/login.actions';
import * as fromLoginSelector from '../../store/selectors/login.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isUsernameValid: boolean = true;
  isPasswordValid: boolean = true;
  isLoginValid: boolean;
  hasUserSubmitted: boolean = false;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateLoginCredential()
  }

  submit(): void {
    // this.isLoginValid = true;

    if(this.username) {
      this.isUsernameValid = this.username?.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi)?
      true: false;
    } else {
      this.isUsernameValid = true;
    }

    if(this.password) {
      this.isPasswordValid = this.password?.length >= 6 && this.password?.length <= 20;
    } else {
      this.isPasswordValid = true;
    }

    if((this.isUsernameValid && this.username) && (this.isPasswordValid && this.password)) {
      this.hasUserSubmitted = true;
      this.store.dispatch(fromLoginAction.addLogin({data: {username: this.username, password: this.password}}));
    } 
  }

  validateLoginCredential(): void {
    this.store.pipe(select(fromLoginSelector.selectLoginStatus)).subscribe(status => {
      if(status) {
        this.router.navigate(['home']);
      } 

      this.isLoginValid = status;
    });
  }
}
