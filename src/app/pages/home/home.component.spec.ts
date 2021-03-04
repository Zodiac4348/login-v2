import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { reducers, metaReducers } from 'src/app/store';
import { Router } from '@angular/router';
import * as fromLoginAction from '../../store/actions/login.actions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: Store;
  let mockRouter: any = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent 
      ], 
      imports: [
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  // logout
  it('should call dispatch from store instance and call router.navigate', () => {
    spyOn(store, 'dispatch').and.callFake(() => {});

    component.logout();

    expect(store.dispatch).toHaveBeenCalledWith(fromLoginAction.resetLogin());
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  });

});
