import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    routerSpy = {navigate: jasmine.createSpy('navigate')};
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('No usuario Redirect', () => {
    component.formLogin.setValue({user: 'wrong', pass: 1111});
    component.submit();
    expect(component.submited).toBeTruthy();
    expect(component.wrongUser).toBeTruthy();
    expect(routerSpy.navigate).toHaveBeenCalledTimes(0);
  });

  it('usuario INVÁLIDO', () => {
    component.formLogin.setValue({user: 'wrong', pass: 1111});
    component.submit();
    expect(component.submited).toBeTruthy();
    expect(component.wrongUser).toBeTruthy();

  });

  it('usuario COMUN', () => {
    component.formLogin.setValue({user: 'comun', pass: 1234});
    component.submit();
    expect(component.submited).toBeTruthy();
    expect(!component.wrongUser).toBeTruthy();
    expect(!!localStorage.getItem('admin')).toBeFalsy();

  });

  it('usuario ADMIN', () => {
    component.formLogin.setValue({user: 'admin', pass: 1234});
    component.submit();
    expect(component.submited).toBeTruthy();
    expect(!component.wrongUser).toBeTruthy();
    expect(!!localStorage.getItem('admin')).toBeTruthy();
  });

  it('Usuario Redirect', () => {
    component.formLogin.setValue({user: 'admin', pass: 1234});
    component.submit();
    expect(!!localStorage.getItem('admin')).toBeTruthy();
    expect(component.submited).toBeTruthy();
    expect(!component.wrongUser).toBeTruthy();
  });

  it('Form Inválido', () => {
    component.formLogin.setValue({user: 'a', pass: 1234});
    component.submit();
    expect(component.submited).toBeTruthy();
    expect(component.wrongUser).toBeTruthy();
    expect(routerSpy.navigate).toHaveBeenCalledTimes(0);
  });
});
