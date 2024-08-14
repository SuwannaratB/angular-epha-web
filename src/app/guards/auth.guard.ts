import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('Guard ...')
  
  const router = inject(Router);
  if (sessionStorage.getItem('account')) {
    return true;
  }
  router.navigate(['auth']);
  return false;
};
