import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store';
import * as fromLoginAction from '../../store/actions/login.actions';
import * as fromLoginReducer from '../../store/reducers/login.reducer';
import { LoginDetails } from 'src/app/models/login-details.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let mockRouter: any = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent 
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule
      ],
      providers: [
        Store,
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    // router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  // Form Group - Username
  it('should check username if invalid', () => {
    let username = component.loginForm.controls['username'];

    username.setValue('asd');

    expect(username.errors['email']).toBeTruthy();
  });

  it('should check username if valid', () => {
    let username = component.loginForm.controls['username'];

    username.setValue('username@example.com');

    expect(username.errors).toBeNull();
    expect(username.valid).toBeTruthy();
  });

  // Form Group - Password
  it('should check password if minlength is invalid', () => {
    let password = component.loginForm.controls['password'];

    password.setValue('123');

    expect(password.errors['minlength']).toBeTruthy();
  });

  it('should check password if maxlength is invalid', () => {
    let password = component.loginForm.controls['password'];

    password.setValue('123456789123456789123');

    expect(password.errors['maxlength']).toBeTruthy();
  });

  it('should check password if length is valid', () => {
    let password = component.loginForm.controls['password'];

    password.setValue('123456789');

    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });

  // ngOnInit
  it('should have a defined loginForm and call validateLoginStatus', () => {
    spyOn(component, 'validateLoginStatus').and.callFake(() => {});

    component.ngOnInit();

    expect(component.loginForm).toBeDefined();
    expect(component.validateLoginStatus).toHaveBeenCalled();
  });

  // submit
  it('should call dispatch from store instance', () => {
    spyOn(store, 'dispatch').and.callFake(() => {});

    const loginDetails: LoginDetails = {
      username: 'username@example.com',
      password: '123456789'
    }
    const action = fromLoginAction.addLogin({ data: loginDetails });

    component.loginForm.controls['username'].setValue('username@example.com');
    component.loginForm.controls['password'].setValue('123456789');
    component.submit();

    expect(component.loginForm.invalid).toBeFalsy();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  // validateLoginStatus
  it('should set isLoginValid to true and call router.navigate', () => {
    spyOn(store, 'pipe').and.returnValue(of(true));

    component.validateLoginStatus();

    expect(component.isLoginValid).toBeTruthy();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should set isLoginValid to false', () => {
    spyOn(store, 'pipe').and.returnValue(of(false));

    component.validateLoginStatus();

    expect(component.isLoginValid).toBeFalsy();
  });

});
