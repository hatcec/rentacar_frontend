import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/services/auth/auth.service';
import { Inject, inject } from '@angular/core';

export const usersGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticated()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};



export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAdmin()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};