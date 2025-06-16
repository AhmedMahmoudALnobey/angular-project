import { UserAuth } from './../services/user-auth';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let userAuth = inject(UserAuth);
  let router = inject(Router);
  if(userAuth.isUserLogin){
    return true;
  }else {
    router.navigate(['/login'])
    return false
  }
};
