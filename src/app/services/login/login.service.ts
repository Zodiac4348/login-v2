import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from 'src/app/models/login-details.model';
import { LoginCredentials } from './login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  submit(loginCredentials: LoginDetails): Observable<boolean> {
    return new Observable((observer) => {
      if(loginCredentials.username == LoginCredentials.username && loginCredentials.password == LoginCredentials.password) {
        observer.next(true);
      } else {
        observer.next(false);
      }
    });
  }
}
