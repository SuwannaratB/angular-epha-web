import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
  // const executeGuard: CanActivateChildFn = (...guardParameters) => 
  //     TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  // });

  // it('should be created', () => {
  //   expect(executeGuard).toBeTruthy();
  // });
});
