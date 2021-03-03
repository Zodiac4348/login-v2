import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.validLoginCredential = true;
    // this.doubleCheck = false;

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
      alert('success');
    } 
  }


}
