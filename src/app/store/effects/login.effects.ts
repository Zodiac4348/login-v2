import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromLoginAction from '../actions/login.actions';
import { mergeMap, map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
export class LoginEffects {

  submit$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromLoginAction.addLogin),
        mergeMap((action) =>
          this.loginService.submit(action.data).pipe(
            map(bool => fromLoginAction.sendLoginStatus({ isLoginSuccess: bool })))
          ),
    );
  });

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}

}
