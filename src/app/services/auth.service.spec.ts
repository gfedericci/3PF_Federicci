import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('Usuario inexistente', () => {
    service.logIn('wrong', '1111');
    expect(!!localStorage.getItem('token')).toBeFalsy();
    expect(!!localStorage.getItem('admin')).toBeFalsy();
  });
  
  it('Usuario Común', () => {
    service.logIn('asd', '1234');
    expect(!!localStorage.getItem('token')).toBeTruthy();
    expect(!!localStorage.getItem('admin')).toBeFalsy();
  });
  
  it('Usuario Admin', () => {
    service.logIn('admin', '1234');
    expect(!!localStorage.getItem('token')).toBeTruthy();
    expect(!!localStorage.getItem('admin')).toBeTruthy();
  });
});
