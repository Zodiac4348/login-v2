import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromLoginActions from '../../store/actions/login.actions';
import * as LoginSelectors from '../../store/selectors/login.selectors';
import { Observable } from 'rxjs';

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
  validLoginCredential: boolean = true;

  testUsername$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.testUsername$ = this.store.pipe(select(LoginSelectors.selectUsername));
    this.test();
  }

  submit(): void {
    this.validLoginCredential = true;

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
      // if(this.userCredentials) {
      //   this.checkCredentials(this.userCredentials);
      // } else {
      //   this.getLoginDetaisl();
      // }

      this.store.dispatch(fromLoginActions.addLogin({data: {username: this.username, password: this.password}}));

      alert('success');
    } 
  }


  test() {
    // this.store.select(LoginSelectors.selectUsername).subscribe(data => {
    //   console.log('USER NAME: ', data);
    // });
    this.store.select<any>('login').subscribe(data => {
      console.log('LOGIN DATA: ', data);
    });
  }
}
